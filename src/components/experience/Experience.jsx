import React from "react";
import "./Experience.css";
import { IoIosPricetag } from "react-icons/io";

const Experience = () => {
  return (
    <section id="Experience" className="container-fluid">
      <div className="row">
        <h2>Recently Used Technologies</h2>
      </div>

      <div className="experience-info skills row">
        <div className="col-sm-2">
          <h3>Front-End Development</h3>
        </div>

        <div className="experience-details col-sm-2">
          <div className="text-a">
            <h4>
              <span>
                <IoIosPricetag />
              </span>
              JavaScript
            </h4>
          </div>
        </div>
        <div className="experience-details col-sm-2">
          <div className="text-a">
            <h4>
              {" "}
              <span>
                <IoIosPricetag />
              </span>
              CSS
            </h4>
          </div>
        </div>
        <div className="experience-details col-sm-2">
          <div className="text-a">
            <h4>
              <span>
                <IoIosPricetag />
              </span>{" "}
              Bootstrap
            </h4>
          </div>
        </div>
        <div className="experience-details col-sm-2">
          <div className="text-a">
            <h4>
              {" "}
              <span>
                <IoIosPricetag />
              </span>
              HTML
            </h4>
          </div>
        </div>
        <div className="experience-details col-sm-2">
          <h4>
            {" "}
            <span>
              <IoIosPricetag />
            </span>
            ReactJS
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Experience;
