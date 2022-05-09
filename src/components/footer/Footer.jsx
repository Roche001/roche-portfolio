import React from "react";
import "./Footer.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiFacebookCircleFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
function Footer() {
  return (
    <section id="Footer">
      <div className="footer">
        <div className="social">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineInstagram />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100006045915802"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiFacebookCircleFill />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillTwitterCircle />
          </a>
        </div>
        <div className="copy">
          <small>
            {" "}
            Roche Harold.
            <AiOutlineCopyrightCircle /> 2022 Some Rights Reserved
          </small>
        </div>
      </div>
    </section>
  );
}

export default Footer;
