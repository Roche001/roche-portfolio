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
        {""}
      </a>
      <a href="#About">
        {" "}
        <AiOutlineUser />
      </a>
      <a href="#Experience">
        {" "}
        <BsBookmarksFill />{" "}
      </a>
      <a href="#Portfolio">
        {" "}
        <GoFileSubmodule />
      </a>
      <a href="#Contacts">
        <AiFillContacts />
      </a>
    </nav>
  );
}

export default Nav;
