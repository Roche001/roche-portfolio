import React, { useState, useEffect } from "react";
import "./Top.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { bar } from "../../nav";

const Top = () => {
  const [navbarColor, setNavbarColor] = useState("transparent");
  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset >= 100) {
        setNavbarColor("#37474f");
      } else {
        setNavbarColor("transparent");
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="navbar" style={{ backgroundColor: navbarColor }}>
      <div className="logo">
        {" "}
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
