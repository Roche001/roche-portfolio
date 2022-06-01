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
    <Navbar bg="#020c1b" variant="#020c1b" sticky="top">
      <Navbar.Brand>
        <img src="./assets/logo6.png" alt="logo" width="40px" height="40px" />
      </Navbar.Brand>
      <div className="navbar">
        <nav>
          <a href="#h">
            <h4>
              <AiFillHome />
            </h4>
            <h5 className="tooltip">Home</h5>
          </a>
          <a href="#About">
            <h4>
              <AiOutlineUser />
            </h4>
            <h5 className="tooltip">About</h5>
          </a>
          <a href="#Experience">
            <h4>
              <BsBookmarksFill />
            </h4>
            <h5 className="tooltip">Experience</h5>
          </a>
          <a href="#Portfolio">
            <h4>
              <GoFileSubmodule />
            </h4>
            <h5 className="tooltip"> Portfolio</h5>
          </a>
          <a href="#Contacts">
            <h4>
              <AiFillContacts />
            </h4>
            <h5 className="tooltip">Contacts</h5>
          </a>
        </nav>
      </div>
    </Navbar>
  );
}

export default Top;
