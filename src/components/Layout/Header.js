import { Fragment, useContext } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Button } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import CartContext from "../../store/cart-context";


const Header = props => {
  const history = useHistory();

  const cartCtx = useContext(CartContext);
  let quantity = 0;
  cartCtx.items.forEach((item) => {
    quantity = quantity + Number(item.quantity);
  });

  const isLoggedIn = cartCtx.isLoggedIn;

  const logoutHandler = () => {
    cartCtx.logout();
    history.replace('/login');
  }

  return (
    <Fragment>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/"><h1>The Generics</h1></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/store">Store</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contactus">Contact Us</Nav.Link>
            {!isLoggedIn &&  <Nav.Link href="/login">Login</Nav.Link>}
          </Nav>

          {isLoggedIn && cartCtx.cart && <Button variant="secondary" onClick={props.showCartItem}>
            <span className="fw-bold">Cart </span>
            (<span className="font-monospace">{quantity}</span>)</Button>}
          {isLoggedIn && <Button variant="danger" onClick={logoutHandler}>Logout</Button>}

        </Container>
      </Navbar>


    </Fragment>
  );
}

export default Header;