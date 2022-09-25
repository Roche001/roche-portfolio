import React from "react";
import "./Experience.css";
import { IoIosPricetag } from "react-icons/io";

const Experience = () => {
  return (
    <section id="Experience" className="container-fluid">
      <div className=" tech row">
        <h2>Recently Used Technologies</h2>
      </div>

      <div className="experience-info skills row ">
        <div className="dev">
          <h3>Front-End Development</h3>
        </div>
        <ul>
          <li>
            <div className="text-a">
              <h4>
                <span>
                  <IoIosPricetag />
                </span>
                JavaScript
              </h4>
            </div>
          </li>
          <li>
            <div className="text-a">
              <h4>
                <span>
                  <IoIosPricetag />
                </span>{" "}
                Bootstrap
              </h4>
            </div>
          </li>
          <li>
            <div className="text-a">
              <h4>
                {" "}
                <span>
                  <IoIosPricetag />
                </span>
                ReactJS
              </h4>
            </div>
          </li>
          <li>
            <div className="text-a">
              <h4>
                {" "}
                <span>
                  <IoIosPricetag />
                </span>
                HTML
              </h4>
            </div>
          </li>
          <li>
            <div className="text-a">
              <h4>
                {" "}
                <span>
                  <IoIosPricetag />
                </span>
                CSS
              </h4>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
