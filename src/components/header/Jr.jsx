import React from "react";
import "./Jr.css";

function Jr() {
  return (
    <div className="jr">
      <a href="#Contacts" className="btn">
        Contact Me
      </a>
      <a
        href="https://drive.google.com/file/d/1xYZ3JJRXzctD6qj4_DhAFlLPXig5_2sJ/view"
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
