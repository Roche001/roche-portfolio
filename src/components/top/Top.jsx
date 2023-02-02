import React from "react";
import "./Top.css";
import { Nav, Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function Top() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="#020c1b"
      variant="dark"
      className="navbar"
    >
      <Container fluid>
        <Navbar.Brand href="#Header">
          <div className="img">
            <img
              src="./assets/touch.png"
              alt="logo"
              width="50px"
              height="50px"
            />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="nav">
          <Form className="d-flex">
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#Header">
                  <h6>Home</h6>
                </Nav.Link>
                <Nav.Link href="#About">
                  <h6>About</h6>
                </Nav.Link>
                <Nav.Link href="#Experience">
                  <h6>Skills</h6>
                </Nav.Link>
                <Nav.Link href="#Portfolio">
                  <h6>Portfolio</h6>
                </Nav.Link>
                <Nav.Link href="#Contacts">
                  <h6>Contacts</h6>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Top;
