import React from "react";
import SwiperSlider from "./SwiperSlider";
import Homeservice from "./Homeservice";
import Card from "./Card";
import Homesecondmain from "./Homesecondmain";
import Homeabout from "./Homeabout";
import Homeserviceprocess from "./Homeserviceprocess";
import Homeform from "./Homeform";
import Homebloge from "./Homebloge";
import Rating from "./Rating";
import Testimonaialslider from "./TestimonialSlider";
import Hometestmonial from "./Hometestmonial";
import HomePartner from "./HomePartener";
import Homecounter from "./Homecounter";
// import Footer from "../../Components/Footer";
import Solutionservice from "../Solution/Solutionservice";

// import Fetch from "./Fetch";

const Home = () => {
  return (
    <div>
      <SwiperSlider />
      <Homeservice />

      <Homesecondmain />
      <Homeabout />
      <Homeserviceprocess />
      <Homeform />
      <Homebloge />
      {/* <Rating/> */}
      <Homecounter />
      <Hometestmonial />
      <HomePartner />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
