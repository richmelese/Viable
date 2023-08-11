import React from "react";
import Aboutmain from "./Aboutmain";
import Aboutwhyus from "./aboutwhyus";
import Homeservice from "../Home/HomeService";
import Swiper from "../About/Swiper";
import FooterContact from "../../components/FooterContact";
import Footer from "../../components/Footer";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div>
      <Fade bottom duration={1500}>
        <Aboutmain />
      </Fade>
      <Fade bottom duration={1500}>
        <Aboutwhyus />
      </Fade>
      <Fade bottom duration={1500}>
        <Homeservice />
      </Fade>
      <Fade bottom duration={1500}>
        <Swiper />
      </Fade>
      <Fade bottom duration={1500}>
        <FooterContact />
      </Fade>
      <Footer />
    </div>
  );
};

export default About;
