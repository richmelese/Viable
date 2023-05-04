import React from "react";
import Aboutmain from "./Aboutmain";
import Aboutwhyus from "./aboutwhyus";
import Homeservice from "../Home/HomeService";
import Swiper from "../About/Swiper";
import FooterContact from "../../components/FooterContact";
import Footer from "../../components/Footer";

const About = () => {
  return (
    <div>
      <Aboutmain />
      <Aboutwhyus />
      <Homeservice />
      <Swiper />

      <FooterContact />
      <Footer />
    </div>
  );
};

export default About;
