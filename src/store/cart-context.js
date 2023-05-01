import React from "react";

const CartContext = React.createContext({
    items: [],
    cart: false,
    products: [],
    token: '',
    isLoggedIn: false,
    email: '',
    callCart: (value) => { },
    addItem: (item) => { },
    removeItem: (id) => { },
    login: (token) => { },
    logout: () => { },
});

export default CartContext;