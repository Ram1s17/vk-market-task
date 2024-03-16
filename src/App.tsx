import { FC, useContext, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"

import ProductService from "./services/ProductService"
import { Context } from "./context/context"

const App: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const { cartStore } = useContext(Context)

  useEffect(() => {
    async function fetchGoods() {
      setIsLoading(true)
      try {
        const response = await ProductService.getProducts()
        if (!Array.isArray(response.data)) {
          throw new Error('An error occured')
        }
        response.data.forEach((item) => {
          cartStore.addProduct(item)
        })
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message)
        } else {
          setError("An unexpected error occurred")
        }
      } finally {
        setIsLoading(false)
      }
    }
    fetchGoods()
  }, [])

  return (
    <>
      <div>{isLoading ? 'Loading...' : (error ? error : JSON.stringify(cartStore.cart))}</div>
    </>
  )
}

export default observer(App)
