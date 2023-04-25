import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

import "../../Styles/news/Swiper.css";
import AImage from "../../assets/post.png";
const SwiperNew = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div>
      <div className="News__swiper">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={pagination}
          modules={[Pagination]}
          slidesPerColumnFill="row"
          className="mySwiper"
          breakpoints={{
            // when window width is >= 640px
            600: {
              width: 640,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
            400: {
              width: 640,
              slidesPerView: 1,
            },
          }}
        >
          <SwiperSlide>
            <div>
              <div class="card">
                <div class="one_card">
                  <img src={AImage} alt="" />
                  <h4>Jane Doe</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div class="card">
                <div class="one_card">
                  <img src={AImage} alt="" />
                  <h4>
                    <b>Jane Doe</b>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div class="card">
                <div class="one_card">
                  <img src={AImage} alt="" />
                  <h4>
                    <b>Jane Doe</b>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div class="card">
                <div class="one_card">
                  <img src={AImage} alt="" />
                  <h4>
                    <b>Jane Doe</b>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div>
              <div class="card">
                <div class="one_card">
                  <img src={AImage} alt="" />
                  <h4>
                    <b>Jane Doe</b>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div>
              <div class="card">
                <div class="one_card">
                  <img src={AImage} alt="" />
                  <h4>
                    <b>Jane Doe</b>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div>
              <div class="card">
                <div class="one_card">
                  <img src={AImage} alt="" />
                  <h4>
                    <b>Jane Doe</b>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperNew;
