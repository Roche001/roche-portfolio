import React from "react";
import "./About.css";
import { BsFillFolderSymlinkFill } from "react-icons/bs";
import { GiArrowDunk } from "react-icons/gi";

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
            <h5>
              <BsFillFolderSymlinkFill />
            </h5>

            <h4>Projects</h4>
          </article>
          <div className="decription">
            <p>
              I'm an experienced front-end developer with 1+ years of
              professional experience. My passion is creating user-friendly
              websites using HTML, CSS, and Javascript. I have a keen eye for
              design and I aim to build visually stunning websites that go above
              and beyond customer expectations. I stay updated with the latest
              industry trends and best practices to ensure my technical skills
              are top-notch. I'm confident in my ability to contribute to
              dynamic development projects and work well with diverse teams. I'm
              ready to utilize my expertise to provide effective solutions and
              help businesses thrive online, focusing on writing clean,
              efficient, and responsive code.
            </p>
          </div>
          <div className="col-md-6">
            <a href="#Portfolio" className="btn">
              View My Projects{" "}
              <span>
                <GiArrowDunk />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
