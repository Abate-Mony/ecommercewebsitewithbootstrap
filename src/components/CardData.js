import React, { useContext, useState } from "react"
const CartContext = React.createContext()
export function useCart() { return useContext(CartContext) }
export function CartProvider({ children }) {
    const [cart, setCartData] = useState([1]);
    const isItemInCart = (id) => cart.includes(id)
    const addToCart = (id) => {
        if (!isItemInCart(id)) {
            setCartData(() => [...cart, id])
        }
    };
    const getLength = cart.length;
    const removefromcart = (id) => {
        if (isItemInCart(id)) {
            const temp = cart.filter((item) => item !== id)
            setCartData(() => [...temp])
        }
    }
    return <CartContext.Provider value = {
        { cart, setCartData, addToCart, removefromcart, isItemInCart, getLength }
    } > { children } < /CartContext.Provider>

}