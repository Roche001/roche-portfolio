import React from "react";
import "./Top.css";
import { Nav, Navbar } from "react-bootstrap";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BsBookmarksFill } from "react-icons/bs";
import { GoFileSubmodule } from "react-icons/go";
import { AiFillContacts } from "react-icons/ai";
import { Container } from "react-bootstrap";
function Top() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="#020c1b" variant="dark">
      <Container>
        <Navbar.Brand href="#Home">
          <div className="img">
            <img
              src="./assets/logo6.png"
              alt="logo"
              width="50px"
              height="50px"
            />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <div className="nav-items">
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#Header">
                <h6>Home</h6>
              </Nav.Link>
              <Nav.Link href="#About">
                <h6>About</h6>
              </Nav.Link>
              <Nav.Link href="#Experience">
                <h6>Experience</h6>
              </Nav.Link>
              <Nav.Link href="#Portfolio">
                <h6>Portfolio</h6>
              </Nav.Link>
              <Nav.Link href="#Contacts">
                <h6>Contacts</h6>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default Top;
