import React from "react";
import "./Portfolio.css";

import { AiFillGithub } from "react-icons/ai";
import { IoIosShareAlt } from "react-icons/io";

function portfolio() {
  return (
    <div id="Portfolio" className="riley container">
      <h2>Featured Projects</h2>

      <div className="card-container ">
        <div className="ranch-card nopadding ">
          <div className="card-img">
            <div className="overlay"></div>
            <img
              className="d-block w-100"
              src="./assets/Featured1.png"
              alt="Rhino Hill"
            />
          </div>
          <div className="card-text">
            <h5>Featured Project</h5>
            <h4>Restaurant Website</h4>
            <div className="card-text-des">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
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
        <div className="ranch-card nopadding ">
          <div className="card-img">
            <div className="overlay"></div>
            <img
              className="d-block w-100"
              src="./assets/Featured2.png"
              alt="Rhino Hill"
            />
          </div>
          <div className="card-text">
            {" "}
            <h5>Featured Project</h5>
            <h4>Logistics Website</h4>{" "}
            <div className="card-text-des">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
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
        <div className="ranch-card nopadding ">
          <div className="card-img">
            <div className="overlay"></div>
            <img
              className="d-block w-100"
              src="./assets/Featured3.png"
              alt="Rhino Hill"
            />
          </div>
          <div className="card-text">
            {" "}
            <h5>Featured Project</h5>
            <h4>Real-Estate Website</h4>
            <div className="card-text-des">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
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
