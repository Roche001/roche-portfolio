import React from "react";
import "./About.css";
import { BsFillFolderSymlinkFill } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  AOS.init({
    duration: 2000,
  });
  return (
    <section id="About" className="container" data-aos="zoom-in-down">
      <div className="row text-center">
        <h2>About Me</h2>
      </div>

      <div className="about row">
        <div className="box col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div className="imgBx">
            <img className="d-block w-100" src="./assets/Roche2.jpg" alt="Me" />
          </div>
        </div>
        <div className="text col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <article className="article-a ">
            <BsFillFolderSymlinkFill className="icon" />
            <h4>Projects</h4>
            <small>5+ Projects</small>
          </article>
          <div className="decription">
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
