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
        <div className="box col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div className="imgBx">
            <img src="./assets/Roche2.jpg" alt="Me" />
          </div>
        </div>
        <div className="text col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <article className="article-a col-md-6">
            <BsFillFolderSymlinkFill className="icon" />
            <h4>Projects</h4>
            <small>5+ Projects</small>
          </article>
          <div className="decription col-md-8">
            <p>
              I am a web developer specialized in designing and constructing
              responsive websites using technologies such as HTML,CSS and
              JavaScript. I ensure that sites meet user expectations by ensuring
              they look good, run smoothly and offer easy access points with no
              loading issues between pages or error messages.
            </p>
          </div>
          <div className="col-md-6">
            <a href="#Portfolio" className="btn">
              View My Projects <BsArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
