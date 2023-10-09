import React from "react";
import Aboutmain from "./Aboutmain";
import Aboutbanner from "./Aboutbanner";
import Homecounter from "../Home/Homecounter";
import Aboutservice from "./Aboutservice";
import Footer from "../../Components/Footer/Footer";
import HomePartner from "../Home/HomePartener";
import ContentDisplay from "./Contentdisplay";

const About = () => {
  return (
    <div>
      <Aboutbanner />
      {/* <ContentDisplay/> */}
      <Aboutmain />
      <Homecounter />
      <Aboutservice />
      <HomePartner />

      {/* <Footer /> */}
    </div>
  );
};

export default About;
