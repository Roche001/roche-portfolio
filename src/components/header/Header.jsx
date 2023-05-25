import React from "react";
import "./Header.css";
import Jr from "./Jr";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  AOS.init({
    duration: 2000,
  });
  return (
    <div id="Header" className="primary">
      <header className="main container-fluid">
        {" "}
        <div className="header_container">
          <h3 data-aos="fade-right">Hello, my name is </h3>
          <h1 data-aos="fade-left">Roche Harold.</h1>
          <h3 data-aos="fade-right">I am a Front-End Developer.</h3>
          <Jr />
          <a href="#About">
            <div className="more">
              <h4>
                <MdKeyboardArrowDown />
              </h4>
            </div>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
