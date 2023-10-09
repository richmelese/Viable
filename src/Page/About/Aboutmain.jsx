import React from "react";
import aboutpic from "../../Asset/aboutimage.png";
import Buttoncontentdisplay from "./Buttoncontentdisplay";
import ContentDisplay from "./Contentdisplay";
import "../../Style/About/aboutmain.css";
import iconss from "../../Asset/Group 9010.png";
import iconss2 from "../../Asset/Group 9009.png";
import iconss3 from "../../Asset/Group 9011.png";
import iconss4 from "../../Asset/Group 9012.png";
const Aboutmain = () => {
  return (
    <section>
      <div className="grid_aboutmain">
        {/* <div><Buttoncontentdisplay/></div>
         <div><img className="service-imgs" src={aboutpic} alt="" /></div> */}
        <div>
          {" "}
          <ContentDisplay />
        </div>
        <div></div>
        <div className="aboutp">
          <img className="iconabout" src={iconss2} alt="" />
          <p>We are trusted </p>
          <img className="iconabout" src={iconss} alt="" />
          <p>The Best security </p>
          <img className="iconabout" src={iconss3} alt="" />
          <p>100% Guaratee</p>
          <img className="iconabout" src={iconss4} alt="" />
          <p>Quick Location</p>
        </div>
      </div>
    </section>
  );
};

export default Aboutmain;
