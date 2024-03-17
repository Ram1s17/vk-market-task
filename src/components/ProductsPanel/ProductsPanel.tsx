import { FC, useContext } from "react"
import { Empty } from "antd"
import { observer } from "mobx-react-lite"

import { Context } from "../../context/context"
import ProductList from "../ProductList/ProductList"

const ProductsPanel: FC = () => {
    const { cartStore } = useContext(Context)

    return (
        <div className={`panel ${cartStore.cart.length === 0 ? 'empty-panel' : ''}`}>
            {cartStore.cart.length > 0
                ? <ProductList />
                : <Empty
                    description={
                        <span>
                            The list of products is empty
                        </span>
                    } />
            }
        </div>
    )
}

export default observer(ProductsPanel)