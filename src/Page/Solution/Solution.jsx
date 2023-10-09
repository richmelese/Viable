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

// import Fetch from "./Fetch";

const Solution = () => {
  return (
    <div>
      <Servicemain />
      {/* <Homeservice/> */}
      <Solutionservice />
      {/* <Homeabout/>  */}
      <Homeserviceprocess />
      {/* <Homeform/>
      <Homebloge/> */}
      {/* <Rating/> */}
      {/* <Homecounter/> */}
      <Hometestmonial />
      {/* <HomePartner/> */}
    </div>
  );
};

export default Solution;
