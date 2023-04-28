import { Fragment, useContext } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Button } from "react-bootstrap";
import CartContext from "../../store/cart-context";


const Header = props => {
  const cartCtx = useContext(CartContext);
  let quantity = 0;
  cartCtx.items.forEach((item) => {
    quantity = quantity + Number(item.quantity);
  });

    return (
        <Fragment>
            <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><h1>The Store</h1></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="/">Store</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          <Button variant="secondary" size="lg"  onClick={props.showCartItem}>
          <span className="fw-bold">Cart </span>
           (<span className="font-monospace">{quantity}</span>)</Button>
          
        </Container>
      </Navbar>
     
  
        </Fragment>
    );
}

export default Header;