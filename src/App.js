import React,{ useState}  from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';
import Footer from './components/Layout/Footer';
import CartProvider from "./store/CartProvider";
import StorePage from './pages/Store';
import AboutPage from './pages/About';
import HomePage from './pages/Home';
import ContactUsPage from './pages/ContactUs';


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
        <Routes>
        <Route exact path="/" element={!cartItems && <StorePage />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/contactus" element={<ContactUsPage />} />
        </Routes>
        <Footer/>

    </CartProvider>

  );
}

export default App;
