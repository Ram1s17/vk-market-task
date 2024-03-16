import { FC, useEffect, useState } from "react"

import ProductService from "./services/ProductService"

const App: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchGoods() {
      setIsLoading(true)
      try {
        const response = await ProductService.getProducts()
        if (!Array(response.data)) {
          throw new Error('An error occured')
        }
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
      <div>{isLoading ? 'Loading...' : (error ? error : 'Product list')}</div>
    </>
  )
}

export default App
