import ProductItem from "./ProductItem";
import Card from 'react-bootstrap/Card';

const DUMMY_PRODUCT = [
    {
        id: 'A1',
        title: 'Album 1',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
        id: 'A2',
        title: 'Album 2',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
        id: 'A3',
        title: 'Album 3',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
        id: 'A4',
        title: 'Album 4',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }]

const AvailableProducts = () => {
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
            <h1 class="text-center"> Music</h1>
            <ul>{productList}</ul>
        </Card>

    );
};

export default AvailableProducts;