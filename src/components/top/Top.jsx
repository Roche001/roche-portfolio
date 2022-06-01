import React from "react";
import "./Top.css";
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BsBookmarksFill } from "react-icons/bs";
import { GoFileSubmodule } from "react-icons/go";
import { AiFillContacts } from "react-icons/ai";
function Top() {
  return (
    <Navbar bg="#020c1b" variant="#020c1b" sticky="top" className="">
      <Navbar.Brand>
        <img src="./assets/logo6.png" alt="logo" width="50px" height="50px" />
      </Navbar.Brand>
      <Nav>
        <Nav.Link href="#h">
          <h4>
            <AiFillHome />
          </h4>
        </Nav.Link>
        <Nav.Link href="#About">
          <h4>
            <AiOutlineUser />
          </h4>
        </Nav.Link>
        <Nav.Link href="#Experience">
          <h4>
            <BsBookmarksFill />
          </h4>
        </Nav.Link>
        <Nav.Link href="#Portfolio">
          <h4>
            <GoFileSubmodule />
          </h4>
        </Nav.Link>
        <Nav.Link href="#Contacts">
          <h4>
            <AiFillContacts />
          </h4>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Top;
