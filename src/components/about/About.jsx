import React from "react";
import "./About.css";

import { BsFillFolderSymlinkFill } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

const About = () => {
  return (
    <section id="About" className="container">
      <div className="row">
        <h2>About Me</h2>
      </div>

      <div className="about row">
        <div className="box col-sm-6">
          <div className="imgBx">
            <img src="./assets/Roche2.jpg" alt="Me" />
          </div>
        </div>
        <div className="text col-sm-6">
          <article className="article-a">
            <BsFillFolderSymlinkFill className="icon" />
            <h4>Projects</h4>
            <small>5+ Projects</small>
          </article>
          <div className="decription">
            <p>
              I am a web developer specialized in designing and constructing{" "}
              <br></br>
              responsive websites using technologies such as HTML,CSS and
              <br></br>
              JavaScript. I ensure that sites meet user expectations by ensuring{" "}
              <br></br>
              they look good, run smoothly and offer easy access points with no{" "}
              <br></br>
              loading issues between pages or error messages.<br></br>
            </p>
          </div>
          <a href="#Portfolio" className="btn">
            View My Projects <BsArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
