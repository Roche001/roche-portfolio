import React from "react";
import "./About.css";
import { BsFillFolderSymlinkFill } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

const About = () => {
  return (
    <section id="About" className="container">
      <div className="text text-center">
        <h2>About Me</h2>
      </div>

      <div className="about row">
        <div className="box color col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <img className="d-block w-100" src="./assets/Roche2.jpg" alt="Me" />
        </div>
        <div className="text col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <article className="article-a ">
            <BsFillFolderSymlinkFill className="icon" />
            <h4>Projects</h4>
            <small>5+ Projects</small>
          </article>
          <div className="decription">
            <p>
              I am a Frontend web developer specialized in building responsive
              websites using technologies such as HTML,CSS, Bootstrap,
              JavaScript and Reactjs. I have the skills and knowledge needed to
              build web applications with clean and intuitive user interfaces
              your customers will love. I am also a team player who can work
              with a cross functional team and work directly with designers and
              product managers to create a seamless and interactive experience
              that will make real time data collection fun and easy.
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
