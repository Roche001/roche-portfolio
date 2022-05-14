import React from "react";
import CV from "./assets/CV.pdf";

function Jr() {
  return (
    <div className="jr">
      <a href="#Contacts" className="btn">
        Contact Me
      </a>
      <a href={CV} download className="btn">
        Download CV
      </a>
    </div>
  );
}

export default Jr;
