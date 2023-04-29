import React, {useState} from "react";
import CartContext from "./cart-context";

const CartProvider = props => {
    const [items, updateItems] = useState([]);
    const [cart, updateCart] = useState(false);
    const [products, updateProducts] = useState([]);

    const addItemToCartHandler = item => {
        updateItems([...items, item]);
    };

    const removeItemFromCartHandler = id => {
        updateItems(items.filter((item) => item.id !==id));
    };

    const callCartHandler = value => {
        updateCart(value);
    };

    const addProductsHandler = product => {
        updateProducts([...product]);
    }

    const cartContext = {
        items: items,
        cart: cart,
        products: products,
        addProducts: addProductsHandler,
        callCart: callCartHandler,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;