import { makeAutoObservable } from "mobx"

import { Product } from "../types/types"

interface CardItem {
    product: Product;
    count: number;
}

class CartStore {
    cart: CardItem[] = []

    constructor() {
        makeAutoObservable(this)
    }

    addProduct(newProduct: Product) {
        const existingItemIndex = this.cart.findIndex(item => item.product.id === newProduct.id)

        if (existingItemIndex === -1) {
            this.cart.push({
                product: newProduct,
                count: 1
            })
        }
    }
}

export default CartStore