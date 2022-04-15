import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <section id="Experience">
      <h2>Recently Used Technologies</h2>
      <div className="skills">
        <div className="experience">
          <h3>Front-End Development</h3>
          <div className="experience-info">
            <div className="experience-details">
              <div className="text-a">
                <h4>JavaScript</h4>
              </div>
            </div>
            <div className="experience-details">
              <div className="text-a">
                <h4>CSS</h4>
              </div>
            </div>
            <div className="experience-details">
              <div className="text-a">
                <h4> Bootstrap</h4>
              </div>
            </div>
            <div className="experience-details">
              <div className="text-a">
                <h4> HTML</h4>
              </div>
            </div>
            <div className="experience-details">
              <h4> ReactJS</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
