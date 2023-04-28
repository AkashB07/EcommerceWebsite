import React, { useState} from 'react';
import Header from './components/Layout/Header';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import CartProvider from "./store/CartProvider";

let App = () => {
  const [cartItems, setCartItems] = useState(false);

  const CartItems = () => {
    setCartItems(true);
  }

  const cartItemsClose = () => {
    setCartItems(false);
  }

  return (
    <CartProvider>
        <Header showCartItem={CartItems}/>
        {cartItems && <Cart closeCartItem={cartItemsClose} />}
        {!cartItems && <Product/>}
    </CartProvider>
  );
}

export default App;
