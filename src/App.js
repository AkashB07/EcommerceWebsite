import React, { useState, Fragment, useContext } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import CartContext from './store/cart-context';
import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';
import Footer from './components/Layout/Footer';
import StorePage from './pages/Store';
import AboutPage from './pages/About';
import HomePage from './pages/Home';
import ContactUsPage from './pages/ContactUs';
import ProductDetail from './pages/ProductDetail';
import LoginPage from './pages/LogIn';

let App = () => {
  const authCtx = useContext(CartContext);
  const [cartItems, setCartItems] = useState(false);

  const CartItems = () => {
    setCartItems(true);
  }

  const cartItemsClose = () => {
    setCartItems(false);
  }

  return (
    <Fragment>
      <Header showCartItem={CartItems} />
      {cartItems && <Cart closeCartItem={cartItemsClose} />}
      <Switch>
        <Route path='/' exact> 
          {authCtx.isLoggedIn && !cartItems && <StorePage />}
          {!authCtx.isLoggedIn && <Redirect to='/login' />}
        </Route>
        <Route path='/store' exact>
          {authCtx.isLoggedIn && !cartItems && <StorePage />}
          {!authCtx.isLoggedIn && <Redirect to='/login' />}
        </Route>
        <Route path='/home' exact> <HomePage /> </Route>
        <Route path='/about' exact> <AboutPage /> </Route>
        <Route path='/contactus' exact> <ContactUsPage /> </Route>
        {authCtx.isLoggedIn && <Route path='/product/:id' exact> <ProductDetail /> </Route>}
        <Route path='/login' exact> <LoginPage /> </Route>
        <Route path='*'> <Redirect to='/' /> </Route>
      </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;