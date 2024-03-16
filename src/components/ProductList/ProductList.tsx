import { FC, useContext } from "react"

import { Context } from "../../context/context"
import ProductCard from "../ProductCard/ProductCard"

const ProductList: FC = () => {
    const { cartStore } = useContext(Context)

    return (
        <div>
            {cartStore.cart.map((cartItem) => (
                <ProductCard
                    key={cartItem.product.id}
                    count={cartItem.count}
                    {...cartItem.product}
                />
            ))}
        </div>
    )
}

export default ProductList