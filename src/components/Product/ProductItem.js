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
import { NavLink } from "react-router-dom";

const ProductItem = props => {
  const cartcntxt = useContext(CartContext);
  let email = cartcntxt.email;

    const addItemToCart = async (event) => {
      try {
        event.preventDefault();
        cartcntxt.addItem({...props, quantity: 1});
        let q = Number(localStorage.getItem('quantity'))+1;
        localStorage.setItem('quantity', q)
        if(email){

          await fetch(`https://crudcrud.com/api/5dff005c87694e679d2cfad189a188e5/${email}`,
            {
              method: 'POST',
              body: JSON.stringify({props, quantity: 1}),
              headers: {
                'Content-Type': 'application/json',
              },
            })
        }
      } 
      catch (error) {
        console.log(error);
      }
    }
    
  return (
    <MDBCard alignment='center'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
      <NavLink to={`/product/${props.id}`} >
        <MDBCardImage src={props.imageUrl} fluid alt='...' />
        </NavLink>
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