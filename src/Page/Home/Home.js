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
import Fade from "react-reveal/Fade";

// import Fetch from "./Fetch";

const Home = () => {
  return (
    <div>
      <Fade bottom duration={1500}>
        <SwiperSlider />
      </Fade>
      <Fade bottom duration={1500}>
        <Homeservice />
      </Fade>
      <Fade bottom duration={1500}>
        <Homesecondmain />
      </Fade>
      <Fade bottom duration={1500}>
        <Homeabout />
      </Fade>
      <Fade bottom duration={1500}>
        <Homeserviceprocess />
      </Fade>

      <Fade bottom duration={1500}>
        <Homeform />
      </Fade>
      <Fade bottom duration={1500}>
        {/* <Homebloge /> */}
        {/* <Rating/> */}
        <Homecounter />
      </Fade>
      <Fade bottom duration={1500}>
        <Hometestmonial />
      </Fade>
      <Fade bottom duration={1500}>
        <HomePartner />
      </Fade>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
