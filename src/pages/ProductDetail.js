import React, { useContext, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CartContext from "../store/cart-context";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRipple,
    MDBCardImage,
} from 'mdb-react-ui-kit';

const ProductDetail = () => {
    const cartcntx = useContext(CartContext);
    const { id } = useParams();
    const product = cartcntx.products.filter((product) => product.id === id);

    useEffect(() => {
        cartcntx.callCart(false);
      });

    return (
        <Card><br/>
            <h1 className="text-center"> Product Detail</h1><br/>
            <MDBCard alignment='center'>
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                        <MDBCardImage src={product[0].imageUrl} fluid alt='...' />
                </MDBRipple>
                <MDBCardBody>
                <MDBCardText>
                    Rating - 4/5 (562)
                    </MDBCardText>
                    <MDBCardTitle>Product Name - {product[0].title}</MDBCardTitle>
                    <MDBCardText>
                    Product Price -  ₹{product[0].price}
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard><br/>
        </Card>
   
    );
};

export default ProductDetail;