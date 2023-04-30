import React, { useContext } from "react";
import ProductItem from "./ProductItem";
import Card from 'react-bootstrap/Card';
import CartContext from "../../store/cart-context";

const AvailableProducts = () => {
    const cartcntx = useContext(CartContext);
    const DUMMY_PRODUCT = cartcntx.products;

    const productList = DUMMY_PRODUCT.map((product) => (
        <ProductItem
            id={product.id}
            key={product.id}
            title={product.title}
            price={product.price}
            imageUrl={product.imageUrl}
        />
    ));
    

    return (
        <Card>
            <h1 className="text-center"> Music</h1>
            <ul>{productList}</ul>
        </Card>
    );
};

export default AvailableProducts;