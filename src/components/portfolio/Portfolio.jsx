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
            <a
              href="https://andelleslogistics.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="d-block w-100"
                src="./assets/index3.png"
                alt="Rhino Hill"
              />
            </a>
          </div>
          <div className="card-text">
            {" "}
            <h5>Featured Project</h5>
            <h4>Logistics Website</h4>{" "}
            <div className="tools">
              <div className="tools-img">
                <img src="./assets/icon1.png" alt="icon" />
              </div>
              <div className="tools-img">
                <img src="./assets/icon2.png" alt="icon" />
              </div>
              <div className="tools-img">
                <img src="./assets/icon4.png" alt="icon" />
              </div>
              <div className="tools-img">
                <img src="./assets/icon7.png" alt="icon" />
              </div>
            </div>
            <div className="card-text-des">
              {" "}
              <h5>Major Features</h5>
              <p>
                A Web application built with HTML,CSS, JavaScript and React to
                enable various organizations and individual customers to
                transport their products to their destination at ease. The web
                application also offers customers the opportunity to track their
                products while on transit.
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
            {" "}
            <a
              href="https://rhinohillrestaurant.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="d-block w-100"
                src="./assets/index2.png"
                alt="Rhino Hill"
              />
            </a>
          </div>
          <div className="card-text">
            <h5>Featured Project</h5>
            <h4>Restaurant Website</h4>{" "}
            <div className="tools">
              <div className="tools-img">
                <img src="./assets/icon1.png" alt="icon" />
              </div>
              <div className="tools-img">
                <img src="./assets/icon2.png" alt="icon" />
              </div>
              <div className="tools-img">
                <img src="./assets/icon4.png" alt="icon" />
              </div>
              <div className="tools-img">
                <img src="./assets/icon7.png" alt="icon" />
              </div>
            </div>
            <div className="card-text-des">
              {" "}
              <h5>Major Features</h5>
              <p>
                A Web application built with HTML,CSS, JavaScript and React to
                enable customers easily book a table in the specific restaurant.
                The web application also enables customers to purchase the
                restaurant’s products online and the products delivered to their
                door step.
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
          {" "}
          <div className="card-img">
            {" "}
            <a
              href="https://homepeak.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                className="d-block w-100"
                src="./assets/peak.png"
                alt="Rhino Hill"
              />
            </a>
          </div>{" "}
          <div className="card-text">
            {" "}
            <h5>Featured Project</h5>
            <h4>Real-Estate Website</h4>
            <div className="tools">
              <div className="tools-img">
                <img src="./assets/icon1.png" alt="icon" />
              </div>
              <div className="tools-img">
                <img src="./assets/icon2.png" alt="icon" />
              </div>
              <div className="tools-img">
                <img src="./assets/icon4.png" alt="icon" />
              </div>
              <div className="tools-img">
                <img src="./assets/icon7.png" alt="icon" />
              </div>
            </div>
            <div className="card-text-des">
              <h5>Major Features</h5>
              This web application enables users to find a property by entering
              its address into a search field or using a map, more details are
              available, including the cost, the number of rooms, the
              construction date, and the rental price and homeowners, brokers,
              agents and landlords can list their property for sale and make it
              widely known.
            </div>
            <h4>
              <a
                href="https://github.com/Roche001/homepeak.git"
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
                href="https://homepeak.netlify.app/"
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
