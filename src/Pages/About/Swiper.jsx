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
                  <h1 className="swiper__header">Kathleen Smith</h1>
                  <p className="swiper__text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Laboriosam, atque doloribus ipsa reiciendis laudantium
                    repudiandae deserunt illum recusandae, in, delectus nobis?
                    Doloremque neque temporibus fugit aperiam illum vel tempora
                    totam.
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
                  <h1 className="swiper__header">Kathleen Smith</h1>
                  <p className="swiper__text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Laboriosam, atque doloribus ipsa reiciendis laudantium
                    repudiandae deserunt illum recusandae, in, delectus nobis?
                    Doloremque neque temporibus fugit aperiam illum vel tempora
                    totam.
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
                <h1 className="swiper__header">Kathleen Smith</h1>
                <p className="swiper__text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laboriosam, atque doloribus ipsa reiciendis laudantium
                  repudiandae deserunt illum recusandae, in, delectus nobis?
                  Doloremque neque temporibus fugit aperiam illum vel tempora
                  totam.
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
            <div id="swpier__color" className="swiper__container">
              <div>
                <img className="swiper__test" src={test} alt="" />
              </div>
              <div>
                <h1 className="swiper__header">Kathleen Smith</h1>
                <p className="swiper__text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laboriosam, atque doloribus ipsa reiciendis laudantium
                  repudiandae deserunt illum recusandae, in, delectus nobis?
                  Doloremque neque temporibus fugit aperiam illum vel tempora
                  totam.
                </p>
              </div>
              <div>
                {/* <IoMdQuote /> */}
                <img src={White} alt="" />{" "}
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
                <h1 className="swiper__header">Kathleen Smith</h1>
                <p className="swiper__text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laboriosam, atque doloribus ipsa reiciendis laudantium
                  repudiandae deserunt illum recusandae, in, delectus nobis?
                  Doloremque neque temporibus fugit aperiam illum vel tempora
                  totam.
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

      {/* -----------Container--------------- */}
      {/* <div className="container All__swiper__container">
        <div className="swiper__container">
          <div>
            <img className="swiper__test" src={test} alt="" />
          </div>
          <div>
            <h1 className="swiper__header">Kathleen Smith</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam, atque doloribus ipsa reiciendis laudantium repudiandae
              deserunt illum recusandae, in, delectus nobis? Doloremque neque
              temporibus fugit aperiam illum vel tempora totam.
            </p>
          </div>
          <div>
            <IoMdQuote />
          </div>
        </div>
        <div></div>
      </div> */}
    </div>
  );
}
