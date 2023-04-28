import React from "react";

const CartContext = React.createContext({
    items: [],
    cart: false,
    callCart: (value) => {},
    addItem: (item) => {},
    removeItem: (id) => {}
});

export default CartContext;