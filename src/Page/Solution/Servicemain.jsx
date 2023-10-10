import React from "react";
// import SwiperSlider from "./SwiperSlider";
import servicepic from "../../Asset/servicebanner.jpg";
// import "../../Style/Solution/Servicemain.css";
/// import Fetch from "./Fetch";
import "../../Style/Soultion/Servicemain.css";
const Servicemain = () => {
  return (
    <section>
      <img className="service-imgs" src={servicepic} alt="" />
      <div className="Solution-Our-service">
        <div>
          {/* <h1>LeuNet ICT Solutions</h1> */}
          <h1>Our Services</h1>
          {/* <button className="gl_button"><p>Our Services</p></button> */}
        </div>
      </div>
    </section>
  );
};

export default Servicemain;
