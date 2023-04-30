import React, {useState} from "react";
import CartContext from "./cart-context";

const DUMMY_PRODUCT = [
    {
        id: 'A1',
        title: 'Album 1',
        price: 100,
        imageUrl: 'https://images.unsplash.com/photo-1601066525716-3cca33c6d4c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFsYnVtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
        id: 'A2',
        title: 'Album 2',
        price: 50,
        imageUrl: 'https://images.unsplash.com/photo-1619983081593-e2ba5b543168?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YWxidW18ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
        id: 'A3',
        title: 'Album 3',
        price: 70,
        imageUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bXVzaWMlMjBhbGJ1bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
        id: 'A4',
        title: 'Album 4',
        price: 100,
        imageUrl: 'https://images.unsplash.com/photo-1584679109597-c656b19974c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaWMlMjBhbGJ1bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    }]

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
        updateCart(value);
    };

    const cartContext = {
        items: items,
        cart: cart,
        products: DUMMY_PRODUCT,
        callCart: callCartHandler,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;