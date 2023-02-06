import React from "react";
import "./Top.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { bar } from "../../nav";

const Top = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <a href="#Header">
          <img src="././assets/touch.png" alt="logo" loading="lazy" />
        </a>
      </div>
      <div className="top-icon onClick={toggleMenu}">
        <h4>
          <GiHamburgerMenu />
        </h4>
      </div>
      <div className="nav-elements">
        {bar.map((bar, index) => {
          return (
            <div key={index} className="menu-one">
              <a href={bar.link}>
                <h6>{bar.name}</h6>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Top;
