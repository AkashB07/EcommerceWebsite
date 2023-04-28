import React, { useContext } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRipple,
  MDBBtn,
  MDBCardImage,
} from 'mdb-react-ui-kit';
import CartContext from '../../store/cart-context';

const ProductItem = props => {
  const cartcntxt = useContext(CartContext);
    const addItemToCart = (event) => {
        event.preventDefault();
        cartcntxt.addItem({...props, quantity: 1});
    }
    
  return (
    <MDBCard alignment='center'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={props.imageUrl} fluid alt='...' />
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{props.title}</MDBCardTitle>
        <MDBCardText>
          ₹{props.price}
        </MDBCardText>
        <MDBBtn onClick={addItemToCart}>Add To Cart</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}

export default ProductItem;