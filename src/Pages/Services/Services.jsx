import React from "react";
import ServiceMain from "./ServiceMain";
import Swiper from "./Swiper";
import ServiceSecond from "./ServiceSecond";
import ServiceNumber from "./ServiceNumber";
import Footer from "../../components/Footer";
const Services = () => {
  return (
    <div>
      <ServiceMain />
      <Swiper />
      <ServiceSecond />
      <ServiceNumber />
      <Footer />
    </div>
  );
};

export default Services;
