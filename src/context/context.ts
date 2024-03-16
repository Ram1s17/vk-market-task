import { createContext } from "react"

import CartStore from "../store/CartStore"

interface ContextType {
    cartStore: CartStore;
}

export const cartStore = new CartStore()

export const Context = createContext<ContextType>({
    cartStore
})