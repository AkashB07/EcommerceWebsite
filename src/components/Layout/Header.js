import { Fragment } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';




const Header = props => {
    return (
        <Fragment>
            <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><h1>The Store</h1></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Store</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
  
        </Fragment>
    );
}

export default Header;