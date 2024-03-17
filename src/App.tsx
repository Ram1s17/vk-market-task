import { FC, useContext, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"

import ProductService from "./services/ProductService"
import { Context } from "./context/context"
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner"
import ProductsPanel from "./components/ProductsPanel/ProductsPanel"
import SummaryPanel from "./components/SummaryPanel/SummaryPanel"

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
      {
        isLoading
          ? <LoadingSpinner />
          : (
            error
              ? <div className="error-text text-align-center">{error}</div>
              :
              <div className="app-container">
                <ProductsPanel />
                <div className="summary-panel-wrapper">
                  <SummaryPanel />
                </div>
              </div>
          )
      }
    </>
  )
}

export default observer(App)
