import React from "react";
import "../../Style/HomeDetail/HomeDetail.css";
import "../../Style/HomeDetail/HomeDescrption.css";

import background from "../../images/Photo.png";
import imageOne from "../../images/Photo (1).png";
import imageTwo from "../../images/photos.png";
import ImageThree from "../../images/Photo (2).png";
import IconOne from "../../images/Group 9009.png";
import IconTwo from "../../images/Group 9010.png";
import IconThree from "../../images/Group 9011.png";
import IconFour from "../../images/Group 9012.png";
import HomeDecrption from "./HomeDecrption";
import HomeServices from "./HomeServices";
import Hometestmonial from "../Home/Hometestmonial";
import Swiper from "../../Page/Home/Slider";
import Fade from "react-reveal/Fade";

const HomeDetail = () => {
  return (
    <div>
      <Fade bottom duration={1500}>
        <div
          className="Detail__Container"
          // style={{ backgroundImage: `url(${background})` }}
        >
          <h1>AIR FREIGHT SHIPPING</h1>
        </div>
        {/*====================Second-Section==================================  */}
        <h2 className="Detail-header">AIR FREIGHT SHIPPING</h2>

        <div className="HD__container">
          <div className="First">
            <div>
              {" "}
              <img className="OneImage" src={imageTwo} alt="" />
            </div>
            <div>
              <img className="TwoImage" src={imageOne} alt="" />
            </div>
            <img className="ThreeImage" src={ImageThree} alt="" />
          </div>
          <div className="Second__Container">
            <img src={IconOne} alt="" />
            <h1>We are trusted</h1>
            <img src={IconTwo} alt="" />
            <h1>The Best security</h1>
            <img src={IconThree} alt="" />
            <h1>100% Guaratee</h1>
            <img src={IconFour} alt="" />
            <h1>Quick Location</h1>
          </div>
        </div>
      </Fade>
      {/* =====================Descrption-Section============================================= */}
      <Fade bottom duration={1500}>
        <HomeDecrption />
      </Fade>
      <Fade bottom duration={1500}>
        <HomeServices />
      </Fade>

      <div className="Detail__Test">
        <Fade bottom duration={1500}>
          <Hometestmonial />
        </Fade>
        <Fade bottom duration={1500}>
          <Swiper />
        </Fade>
      </div>
    </div>
  );
};

export default HomeDetail;
