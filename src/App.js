import React, {Fragment, useState} from 'react';
import Header from './components/Layout/Header';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';

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
        <Header showCartItem={CartItems}/>
        {cartItems && <Cart closeCartItem={cartItemsClose} />}
        {!cartItems && <Product/>}
    </Fragment>
  );
}

export default App;
