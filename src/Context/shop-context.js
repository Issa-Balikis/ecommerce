import { createContext, useState } from "react";
import Products from "../products";

export const shopContext = createContext(null);


const getDefaultCart = () => {
        let cart = {};
        for(let i = 1; i < Products.length + 1; i++) {
            cart[i] = 0;
        }
        return cart;
   }

const ShopContextProvider = (props) => {
    const [ cartItem, setCartItem ] = useState(getDefaultCart())

    const getTotalCartAmount = () => {
        let totalAmount = 0
        for(const item in cartItem) {
            if(cartItem[item] > 0) {
                let itemInfo = Products.find((product) => product.id === Number(item));
                totalAmount += cartItem[item] * itemInfo.price
            }
        }
        return totalAmount;
    };

    const addToCart = (itemId) => {
        setCartItem((prev) => ({...prev, [itemId]: prev[itemId] + 1 }));
    }
    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({...prev, [itemId]: prev[itemId] - 1 }));
    }
    const updateCartItemCount = (newAmount, itemId) => {
        setCartItem((prev) => ({...prev, [itemId]: newAmount }));
    }

    const contextValue = { cartItem, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount }
    return ( 
        <shopContext.Provider value={contextValue}>
            {props.children}
        </shopContext.Provider>
     );
}
 
export default ShopContextProvider;