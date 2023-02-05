import React from "react";
import "./Footer.css";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
function Footer() {
  return (
    <div id="Footer">
      <div className="footer">
        <div className="social">
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
          <small>Designed & Built by Roche Harold</small>
        </div>
      </div>
    </div>
  );
}

export default Footer;
