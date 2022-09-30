import React from "react";
import "./Portfolio.css";

import { AiFillGithub } from "react-icons/ai";
import { IoIosShareAlt } from "react-icons/io";

function portfolio() {
  return (
    <div id="Portfolio" className="riley container">
      <h2>Portfolio</h2>

      <div className="card-container row">
        <div className="ranch-card nopadding col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <div className="card-img">
            <img
              className="d-block w-100"
              src="./assets/long1(1).png"
              alt="Rhino Hill"
            />
          </div>
          <div className="card-text">
            <h4>Restaurant Website</h4>
            <h4>
              <a
                href="https://github.com/Roche001/Rhino-Hill-Restaurant.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <AiFillGithub /> Github
              </a>
            </h4>
            <h4>
              {" "}
              <a
                href="https://rhinohillrestaurant.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoIosShareAlt /> Live Demo
              </a>
            </h4>
          </div>
        </div>
        <div className="ranch-card nopadding col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <div className="card-img">
            <img
              className="d-block w-100"
              src="./assets/logistics(1).png"
              alt="Rhino Hill"
            />
          </div>
          <div className="card-text">
            <h4>Logistics Website</h4>
            <h4>
              <a
                href="https://github.com/Roche001/Logistics-company.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <AiFillGithub /> Github
              </a>
            </h4>
            <h4>
              {" "}
              <a
                href="https://andelleslogistics.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoIosShareAlt /> Live Demo
              </a>
            </h4>
          </div>
        </div>
        <div className="ranch-card nopadding col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <div className="card-img">
            <img
              className="d-block w-100"
              src="./assets/rise.png"
              alt="Rhino Hill"
            />
          </div>
          <div className="card-text">
            <h4>Real-Estate Website</h4>
            <h4>
              <a
                href="https://github.com/Roche001/high-rise.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <AiFillGithub /> Github
              </a>
            </h4>
            <h4>
              {" "}
              <a
                href="https://andelleslogistics.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoIosShareAlt /> Live Demo
              </a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default portfolio;
