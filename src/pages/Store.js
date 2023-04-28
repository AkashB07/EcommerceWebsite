import React, { useContext, useEffect } from "react";
import Product from '../components/Product/Product';
import CartContext from '../store/cart-context';

const StorePage = () => {
    const cartcntx = useContext(CartContext);
    useEffect(() => {
        cartcntx.callCart(true);
      });
    
    return (
     <Product/>
    )
}

export default StorePage;