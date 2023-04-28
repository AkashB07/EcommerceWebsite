import React, { useState} from 'react';
import { Outlet} from 'react-router-dom';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Cart from '../components/Cart/Cart';
import CartProvider from '../store/CartProvider';

const RootLayout = () => {
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
        {!cartItems && <Outlet/>}
        <Footer/>
    </CartProvider>

  );

}

export default RootLayout;