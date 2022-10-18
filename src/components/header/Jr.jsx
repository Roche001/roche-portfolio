import React from "react";
import "./Jr.css";
import Harold from "../../assets/roche.pdf";

function Jr() {
  return (
    <div className="jr">
      <a href="#Contacts" className="btn">
        Contact Me
      </a>
      <a href={Harold} download className="btn">
        Download CV
      </a>
    </div>
  );
}

export default Jr;
