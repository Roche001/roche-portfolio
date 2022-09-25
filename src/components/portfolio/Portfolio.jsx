import React from "react";
import "./Portfolio.css";
import Card from "react-bootstrap/Card";
import { AiFillGithub } from "react-icons/ai";
import { IoIosShareAlt } from "react-icons/io";

function portfolio() {
  return (
    <div id="Portfolio" className="riley">
      <h2>Portfolio</h2>

      <div className="card-container">
        <Card style={{ width: "18rem" }} className="card-one">
          <Card.Img
            variant="top"
            src="./assets/long1(1).png"
            alt="Rhino Hill"
          />
          <Card.Body>
            <div className="card-body">
              <a
                href="https://github.com/Roche001/Rhino-Hill-Restaurant.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <AiFillGithub />
              </a>
              <a
                href="https://rhinohillrestaurant.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoIosShareAlt />
              </a>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="card-one">
          <Card.Img
            variant="top"
            src="./assets/logistics(1).png"
            alt="Rhino Hill"
          />
          <Card.Body>
            <div className="card-body">
              <a
                href="https://github.com/Roche001/Logistics-company.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <AiFillGithub />
              </a>
              <a
                href="https://andelleslogistics.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoIosShareAlt />
              </a>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="card-one">
          <Card.Img variant="top" src="./assets/rise.png" alt="Rhino Hill" />
          <Card.Body>
            <div className="card-body">
              <a
                href="https://github.com/Roche001/high-rise.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <AiFillGithub />
              </a>
              <a
                href="https://andelleslogistics.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoIosShareAlt />
              </a>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default portfolio;
