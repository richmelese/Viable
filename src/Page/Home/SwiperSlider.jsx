import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Newbg from "../../Asset/Newbg.png";
import "../../Style/Home/swiper.css";
import "../../Style/Home/slidermain.css";

// import required modules
import { Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          {" "}
          <div>
            {/* <img className="New-imgs" src={Newbg} alt="" /> */}
            <div className="New-home-container">
              <div>
                {/* <h1>LeuNet ICT Solutions</h1> */}
                <h1>Delivering Excellence in Every trade</h1>
                <button className="gl_button">
                  <a href="/Solution">
                    <p>Our Services</p>
                  </a>{" "}
                </button>
              </div>
              <div>
                {/* <img className="Grid-img" src={dashboard_img_1} alt="" /> */}
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div>
            {/* <img className="New-imgs" src={Newbg} alt="" /> */}
            <div className="New-home-container">
              <div>
                {/* <h1>LeuNet ICT Solutions</h1> */}
                <h1>Delivering Excellence in Every trade</h1>
                <button className="gl_button">
                  <a href="/Solution">
                    <p>Our Services</p>
                  </a>
                </button>
              </div>
              <div>
                {/* <img className="Grid-img" src={dashboard_img_1} alt="" /> */}
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div>
            {/* <img className="New-imgs" src={Newbg} alt="" /> */}
            <div className="New-home-container">
              <div>
                {/* <h1>LeuNet ICT Solutions</h1> */}
                <h1>Delivering Excellence in Every trade</h1>
                <button className="gl_button">
                  <a href="/Solution">
                    <p>Our Services</p>
                  </a>{" "}
                </button>
              </div>
              <div>
                {/* <img className="Grid-img" src={dashboard_img_1} alt="" /> */}
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
