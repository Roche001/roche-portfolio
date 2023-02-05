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
          <h5>
            {" "}
            <a
              href="https://twitter.com/RocheHarold2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillTwitterCircle />
            </a>
          </h5>
          <h6>
            <a
              href="https://www.linkedin.com/in/roche-harold-3b3aba141/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin />
            </a>
          </h6>
          <h6>
            {" "}
            <a
              href="https://github.com/Roche001"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub />
            </a>
          </h6>
        </div>
        <div className="copy">
          <small>Designed & Built by Roche Harold</small>
        </div>
      </div>
    </div>
  );
}

export default Footer;
