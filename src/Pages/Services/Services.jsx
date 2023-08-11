import React from "react";
import ServiceMain from "./ServiceMain";
import Swiper from "./Swiper";
import ServiceSecond from "./ServiceSecond";
import ServiceNumber from "./ServiceNumber";
import Footer from "../../components/Footer";
import Fade from "react-reveal/Fade";

const Services = () => {
  return (
    <div>
      <Fade bottom duration={1500}>
        <ServiceMain />
      </Fade>
      <Fade bottom duration={1500}>
        <Swiper />
      </Fade>
      <Fade bottom duration={1500}>
        <ServiceSecond />
      </Fade>
      <Fade bottom duration={1500}>
        <ServiceNumber />
      </Fade>
      <Footer />
    </div>
  );
};

export default Services;
