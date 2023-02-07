import React, { useState } from "react";
import "./Top.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { bar } from "../../nav";

const Top = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleClick = () => {
    toggleMenu();
  };
  return (
    <div className="navbar">
      <div className="logo">
        <a href="#Header">
          <img src="././assets/touch.png" alt="logo" loading="lazy" />
        </a>
      </div>
      <div className="top-icon" onClick={toggleMenu}>
        <h4>
          <GiHamburgerMenu />
        </h4>
      </div>
      <div className={menuOpen ? "nav-elements" : "menu-items"}>
        <div className="side-bar">
          {bar.map((bar, index) => {
            return (
              <div key={index} className="menu-one">
                <a href={bar.link} onClick={handleClick}>
                  <h6>{bar.name}</h6>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Top;
