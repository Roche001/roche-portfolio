import React from "react";
import "./Footer.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiFacebookCircleFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
function Footer() {
  return (
    <div id="Footer">
      <div className="footer">
        <div className="social">
          <a
            href="https://www.instagram.com/roche_harold/"
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
            href="https://twitter.com/RocheHarold2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillTwitterCircle />
          </a>
          <a
            href="https://www.linkedin.com/in/roche-harold-3b3aba141/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/Roche001"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub />
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
    </div>
  );
}

export default Footer;
