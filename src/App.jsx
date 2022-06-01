import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import Top from "./components/top/Top";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Top />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
