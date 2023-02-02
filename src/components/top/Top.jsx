import React from "react";
import "./Top.css";
import { bar } from "../../nav";

function Top() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="././assets/touch.png" alt="logo" />
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
