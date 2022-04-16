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
        {" "}
        <h4>
          <BsBookmarksFill />
        </h4>
        <h5 className="tooltip">Experience</h5>
      </a>
      <a href="#Portfolio">
        <h4>
          {" "}
          <GoFileSubmodule />{" "}
        </h4>
        <h5 className="tooltip"> Portfolio</h5>
      </a>
      <a href="#Contacts">
        <h4>
          {" "}
          <AiFillContacts />
        </h4>
        <h5 className="tooltip">Contacts</h5>
      </a>
    </nav>
  );
}

export default Nav;
