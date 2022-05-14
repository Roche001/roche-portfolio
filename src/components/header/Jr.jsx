import React from "react";
import "./Jr.css";

function Jr() {
  return (
    <div className="jr">
      <a href="#Contacts" className="btn">
        Contact Me
      </a>
      <a
        href="https://drive.google.com/drive/u/1/my-drive"
        download
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
      >
        Download CV
      </a>
    </div>
  );
}

export default Jr;
