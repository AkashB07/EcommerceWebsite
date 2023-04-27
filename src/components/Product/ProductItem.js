import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRipple,
  MDBBtn,
  MDBCardImage,
} from 'mdb-react-ui-kit';

const ProductItem = props => {
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
        <MDBBtn href='#'>Add To Cart</MDBBtn>
      </MDBCardBody>
    </MDBCard>







  );
}

export default ProductItem;