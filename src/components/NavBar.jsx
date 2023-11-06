import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { Button } from "react-bootstrap";

import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <Navbar expand="s" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="/">
          <Image src="TasteMadeLogo.svg" alt="logo" />
          TasteMate
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" align="center">
          <Nav className="me-auto align-text-center">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/allrecipes">All recipes</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>

            <Container className="justify-content-evenly">
              <Button href="/login" variant="outline-primary">
                Sign in
              </Button>
              <Button href="/signup" variant="primary" className="w-20">
                Sign up
              </Button>
            </Container>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
