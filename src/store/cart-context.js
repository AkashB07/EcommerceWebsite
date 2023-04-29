import React from "react";

const CartContext = React.createContext({
    items: [],
    cart: false,
    products: [],
    addProducts: (product) => {},
    callCart: (value) => {},
    addItem: (item) => {},
    removeItem: (id) => {}
});

export default CartContext;