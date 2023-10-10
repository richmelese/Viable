import React from "react";
// import SwiperSlider from "./SwiperSlider";
import Homeservice from "../Home/Homeservice";
// import Card from "./Card";
import Homesecondmain from "../Home/Homesecondmain";
import Homeabout from "../Home/Homeabout";
import Homeserviceprocess from "../Home/Homeserviceprocess";
import Homeform from "../Home/Homeform";
import Homebloge from "../Home/Homebloge";

import Hometestmonial from "../Home/Hometestmonial";
import HomePartner from "../Home/HomePartener";
import Homecounter from "../Home/Homecounter";
import Servicemain from "./Servicemain";
import Solutionservice from "./Solutionservice";
import Fade from "react-reveal/Fade";

// import Fetch from "./Fetch";

const Solution = () => {
  return (
    <div>
      <Fade bottom duration={1500}>
        <Servicemain />
      </Fade>
      {/* <Homeservice/> */}
      <Fade bottom duration={1500}>
        <Solutionservice />
      </Fade>
      <Fade bottom duration={1500}>
        {/* <Homeabout/>  */}
        <Homeserviceprocess />
      </Fade>

      <Fade bottom duration={1500}>
        <Hometestmonial />
      </Fade>
      {/* <HomePartner/> */}
    </div>
  );
};

export default Solution;
