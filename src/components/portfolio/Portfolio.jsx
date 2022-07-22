import React from "react";
import "./Portfolio.css";

function portfolio() {
  return (
    <section id="Portfolio" className="container-fluid">
      <div className=" port row text-center">
        <h2>My Noteworthy Projects</h2>
      </div>

      <div className="porfolio row">
        <article className="folio-items col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
          
            <img
              className="d-block w-100"
              src="./assets/Restaurant1.png"
              alt="kagan"
            />
         
          <div className="title">Restaurant Website</div>
          <div className="icons">
            <a
              href="https://github.com/Roche001/Rhino-Hill-Restaurant.git"
              className="btn-a"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <button className="btn-a">Github</button>
            </a>
            <a
              href="https://rhinohillrestaurant.netlify.app/"
              className="btn-a"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <button className="btn-a">Live Demo</button>
            </a>
          </div>
        </article>
        <article className="folio-items col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
          
            <img
              className="d-block w-100"
              src="./assets/Real.png"
              alt="kagan"
            />
        
          <div className="title">Real-Estate Website</div>
          <div className="icons">
            <a
              href="https://github.com/Roche001/Real-Estate-website.git"
              className="btn-a"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <button className="btn-a">Github</button>
            </a>
            <a
              href="https://pharolix.netlify.app"
              className="btn-a"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <button className="btn-a">Live Demo</button>
            </a>
          </div>
        </article>
        <article className="folio-items col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
         
            <img
              className="d-block w-100"
              src="./assets/logistics.png"
              alt="kagan"
            />
         
          <div className="title">Real-Estate Website</div>
          <div className="icons">
            <a
              href="https://github.com/Roche001/Logistics-company.git"
              className="btn-a"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <button className="btn-a">Github</button>
            </a>
            <a
              href="https://andelleslogistics.netlify.app/"
              className="btn-a"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <button className="btn-a">Live Demo</button>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default portfolio;
