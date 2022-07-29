import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const isInCart = (id) => {
        return cartList.find(product => product.id == id) ? true : false;
    }
    
    const addToCart = (item, quantity) =>{
        if(isInCart(item.id)){
            setCartList(cartList.map(product =>{
                return product.id == item.id ? {...product, quantity: product.quantity + quantity} : product
            }))
        }else{
            setCartList([...cartList, {...item, quantity}])
        }
    }

    const removeItem = (id) =>{ 
        setCartList(cartList.filter(product => product.id !== id)
    )}
    const clear = () => setCartList([]);

    return(
        <CartContext.Provider value = {{cartList, addToCart, isInCart, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;