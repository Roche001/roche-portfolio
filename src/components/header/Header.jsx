import React from "react";
import "./Header.css";
import Jr from "./Jr";

const Header = () => {
  return (
    <header className="main">
      {" "}
      <div className="header_container">
        <h4>Hello, my name is</h4>
        <h1>Roche Harold</h1>
        <h3>I am a Front-End Developer</h3>
        <Jr />
      </div>
    </header>
  );
};

export default Header;
