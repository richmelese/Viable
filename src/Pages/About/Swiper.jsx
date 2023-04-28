import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../Styles/About/swiper.css";

// import required modules
import { Pagination } from "swiper";
import image from "../../assets/Photo.png";
import test from "../../assets/test_photo.png";
import { IoMdQuote } from "react-icons/io";
import quot from "../../assets/quot.png";
import White from "../../assets/white.png";
export default function App() {
  return (
    <div className="container">
      <h1>What Our Customer Say</h1>
      <Swiper
        slidesPerView={2}
        spaceBetween={1}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          400: {
            width: 640,
            slidesPerView: 1,
          },
        }}
      >
        <div className="two__container">
          <SwiperSlide>
            {" "}
            <div className="container All__swiper__container ">
              <div className="swiper__container ">
                <div>
                  <img className="swiper__test" src={test} alt="" />
                </div>
                <div>
                  <h1 className="swiper__header">Miss Samrawite</h1>
                  <p className="swiper__text">
                    I'm a small business owner, and this service has been a
                    godsend! Viable is amazing, I'd absolutely recommend it to
                    anyone work with Viable Trading.
                  </p>
                </div>
                <div>
                  {/* <IoMdQuote /> */}
                  <img src={quot} alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container All__swiper__container">
              <div id="swpier__color" className="swiper__container">
                <div>
                  <img className="swiper__test" src={test} alt="" />
                </div>
                <div>
                  <h1 className="swiper__header">Damana Tech</h1>
                  <p className="swiper__text">
                    Their vast experience and knowledge of the global futures
                    markets will save you time and money when it comes to
                    execution, rolls and research.
                  </p>
                </div>
                <div>
                  {/* <IoMdQuote /> */}
                  <img src={White} alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
        {/*===============Two==============  */}
        <SwiperSlide>
          {" "}
          <div className="container All__swiper__container">
            <div className="swiper__container">
              <div>
                <img className="swiper__test" src={test} alt="" />
              </div>
              <div>
                <h1 className="swiper__header">Ato Abraham</h1>
                <p className="swiper__text">
                  Viable is very knowledgeable and readily available. I would
                  recommend his services to anyone who wants to trade domestic
                  and/or foreign futures markets
                </p>
              </div>
              <div>
                {/* <IoMdQuote /> */}
                <img src={quot} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <div className="container All__swiper__container">
            <div className="swiper__container">
              <div>
                <img className="swiper__test" src={test} alt="" />
              </div>
              <div>
                <h1 className="swiper__header">Bitapps Tech</h1>
                <p className="swiper__text">
                  I have been extremely pleased with Viable Trading , in terms
                  of the number of products available for trading, as well as
                  the reliability Viable actually delivers!
                </p>
              </div>
              <div>
                {/* <IoMdQuote /> */}
                <img src={quot} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
