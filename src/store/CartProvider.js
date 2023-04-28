import React, {useState} from "react";
import CartContext from "./cart-context";

const CartProvider = props => {
    const [items, updateItems] = useState([]);
    const [cart, updateCart] = useState(false);
    const addItemToCartHandler = item => {
        updateItems([...items, item]);
    };

    const removeItemFromCartHandler = id => {
        updateItems(items.filter((item) => item.id !==id));
    };

    const callCartHandler = value => {
        updateCart(value)
    };

    const cartContext = {
        items: items,
        cart: cart,
        callCart: callCartHandler,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;