import React, { useContext, useState } from "react"
const CartContext = React.createContext()
export function useCart() { return useContext(CartContext) }
export function CartProvider({ children }) {
    const [cart, setCartData] = useState([]);
    const isItemInCart = (id) => cart.includes(id)
    const addToCart = (id) => {
        console.log(cart)
        if (!isItemInCart(id)) {
            setCartData(() => [...cart, id])
            return true
        }
        return false
    };
    const getLength = cart ? .length
    const removefromcart = (id) => {
        if (isItemInCart(id)) {
            const temp = cart.filter((item) => item !== id)
            console.log(temp)
            setCartData(() => [...temp])
            return true
        }
        return false

    }
    return <CartContext.Provider value = {
            { cart, setCartData, addToCart, removefromcart, isItemInCart, getLength }
        } > { children } <
        /CartContext.Provider>

}