import React from "react";
import "./Top.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { bar } from "../../nav";

function Top() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="././assets/touch.png" alt="logo" />
      </div>
      <div className="top-icon">
        <h4>
          <GiHamburgerMenu />
        </h4>
      </div>
      <div className="nav-elements">
        {bar.map((bar, index) => {
          return (
            <div key={index} className="menu-one" href={bar.link}>
              <h6>{bar.name}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Top;
