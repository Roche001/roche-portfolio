import React from "react";
import "./Nav.css";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BsBookmarksFill } from "react-icons/bs";
import { GoFileSubmodule } from "react-icons/go";
import { AiFillContacts } from "react-icons/ai";
function Nav() {
  return (
    <nav>
      <a href="#">
        {" "}
        <AiFillHome />
        <h5 className="tooltip">Home</h5>
      </a>
      <a href="#About">
        <h5 className="tooltip">About</h5>
        <AiOutlineUser />
      </a>
      <a href="#Experience">
        {" "}
        <BsBookmarksFill />
        <h5 className="tooltip">Experience</h5>
      </a>
      <a href="#Portfolio">
        {" "}
        <GoFileSubmodule /> <h5 className="tooltip"> Portfolio</h5>
      </a>
      <a href="#Contacts">
        <AiFillContacts /> <h5 className="tooltip">Contacts</h5>
      </a>
    </nav>
  );
}

export default Nav;
