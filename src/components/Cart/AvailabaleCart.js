import React, {Fragment} from 'react';
import CartItem from './CartItem';

const DUMMY_PRODUCT = [
    {
        id: 'c1',
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        quantity: 2,
    },

    {
        id: 'c2',
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        quantity: 3,
    },

    {
        id: 'c3',
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        quantity: 1,
    }]

const AvailableCart = () => {
    const productList = DUMMY_PRODUCT.map((product) => (
        <CartItem
            id={product.id}
            key={product.id}
            title={product.title}
            price={product.price}
            imageUrl={product.imageUrl}
        />
    ));

    return (
        <Fragment>
            {productList}
        </Fragment>

    );
};

export default AvailableCart;
