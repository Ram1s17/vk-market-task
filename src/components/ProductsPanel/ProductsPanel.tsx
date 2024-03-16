import { FC, useContext } from "react"
import { Empty } from "antd"

import { Context } from "../../context/context"
import ProductList from "../ProductList/ProductList"

const ProductsPanel: FC = () => {
    const { cartStore } = useContext(Context)

    return (
        <div className="products-panel">
            {cartStore.cart.length > 0
                ? <ProductList />
                : <Empty />
            }
        </div>
    )
}

export default ProductsPanel