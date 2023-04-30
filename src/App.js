import React, { useState, Fragment } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';
import Footer from './components/Layout/Footer';
import StorePage from './pages/Store';
import AboutPage from './pages/About';
import HomePage from './pages/Home';
import ContactUsPage from './pages/ContactUs';
import ProductDetail from './pages/ProductDetail';

let App = () => {
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
        <Route path='/' exact> {!cartItems && <StorePage />} </Route>
        <Route path='/store' exact> {!cartItems && <StorePage />} </Route>
        <Route path='/home' exact> <HomePage /> </Route>
        <Route path='/about' exact> <AboutPage /> </Route>
        <Route path='/contactus' exact> <ContactUsPage /> </Route>
        <Route path='/product/:id' exact> <ProductDetail /> </Route>
        <Route path='*'> <Redirect to='/' /> </Route>
      </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;