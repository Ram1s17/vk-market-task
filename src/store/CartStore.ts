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

    get totalPrice(): number {
        const total = this.cart.reduce((total, current) => total + (current.product.price * current.count), 0)
        return Number(total.toFixed(3))
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

    increaseProductCount(productId: number) {
        const existingItem = this.cart.find(item => item.product.id === productId)

        if (existingItem && existingItem.count < 10) {
            existingItem.count++
        }
    }

    decreaseProductCount(productId: number) {
        const existingItem = this.cart.find(item => item.product.id === productId)

        if (existingItem && existingItem.count > 1) {
            existingItem.count--
        }
    }

    deleteProduct(productId: number) {
        const existingItemIndex = this.cart.findIndex(item => item.product.id === productId)

        if (existingItemIndex !== -1) {
            this.cart.splice(existingItemIndex, 1)
        }
    }
}

export default CartStore