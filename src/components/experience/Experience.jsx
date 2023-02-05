import React from "react";
import "./Experience.css";
import { BsBraces } from "react-icons/bs";
import { card } from "../../nav";

const Experience = () => {
  return (
    <section id="Experience" className="container-fluid">
      <div className=" tech row">
        <h2>Skills</h2>
      </div>
      <div className="front-container">
        <h3>
          <BsBraces />
          <span>Frontend Development</span>
        </h3>
      </div>
      <div className="front-end row">
        <div className="front-end-card  ">
          <h3>
            <img
              className="d-block w-100"
              src="./assets/icon1.png"
              alt="html"
            />
          </h3>
          <h4> HTML</h4>
        </div>
        <div className="front-end-card ">
          <h3>
            <img className="d-block w-100" src="./assets/icon2.png" alt="css" />
          </h3>
          <h4> CSS</h4>
        </div>
        <div className="front-end-card">
          <h3>
            <img className="d-block w-100" src="./assets/icon3.png" alt="js" />
          </h3>
          <h4> Javascript</h4>
        </div>
      </div>
      <div className="front-end row">
        <div className="front-end-card">
          <h3>
            <img
              className="d-block w-100"
              src="./assets/icon4.png"
              alt="React"
            />
          </h3>
          <h4> React</h4>
        </div>
        <div className="front-end-card">
          <h3>
            <img
              className="d-block w-100"
              src="./assets/icon55.png"
              alt="git"
            />
          </h3>
          <h4> Git</h4>
        </div>
        <div className="front-end-card">
          <h3>
            <img
              className="d-block w-100"
              src="./assets/icon7.png"
              alt="html"
            />
          </h3>
          <h4> Bootstrap</h4>
        </div>
      </div>
    </section>
  );
};

export default Experience;
