import React from "react";
import "./Portfolio.css";
import { AiFillGithub } from "react-icons/ai";
import { FaEye } from "react-icons/fa";

function portfolio() {
  return (
    <div id="Portfolio" className="riley">
      <h2>Portfolio</h2>
      <div className="big-riley row">
        <div className="riley-card col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <div className="riley-card-box">
            <img className="d-block w-100" src="./assets/long.png" alt="hill" />
          </div>
          <div className="riley-text">
            <a
              href="https://github.com/Roche001/Rhino-Hill-Restaurant"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>
                <AiFillGithub />
              </h3>
            </a>

            <a
              href="https://rhinohillrestaurant.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>
                <FaEye />
              </h3>
            </a>
          </div>
        </div>
        <div className="riley-card col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <div className="riley-card-box">
            <img
              className="d-block w-100"
              src="./assets/logistics.png"
              alt="hill"
            />
          </div>
          <div className="riley-text">
            <a
              href="https://github.com/Roche001/Logistics-company"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>
                <AiFillGithub />
              </h3>
            </a>

            <a
              href="https://andelleslogistics.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>
                <FaEye />
              </h3>
            </a>
          </div>
        </div>
        <div className="riley-card col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <div className="riley-card-box">
            <img className="d-block w-100" src="./assets/rise.png" alt="hill" />
          </div>
          <div className="riley-text">
            <a
              href="https://github.com/Roche001/Rhino-Hill-Restaurant"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>
                <AiFillGithub />
              </h3>
            </a>

            <a
              href="https://rhinohillrestaurant.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>
                <FaEye />
              </h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default portfolio;
