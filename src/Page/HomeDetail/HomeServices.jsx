import React from "react";
import "../../Style/HomeDetail/HomeServices.css";
import ImageOne from "../../images/hm.png";
import btn from "../../images/btn.png";
const HomeServices = () => {
  return (
    <div>
      <div className="HM__Services">
        <div>
          <h2>Key benefits With Our Service</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Leo pharetra facilisis
            ornare bibendum. Volutpat scelerisque at neque feugiat ac sit purus
            sem. Commodo purus velit orci ac eu eget molestie commodo et.
            Tincidunt egestas amet ac id amet elit. Dignissim aliquam laoreet
            eget diam at sit.
          </p>
        </div>
        <div></div>
        {/*  */}
        <div className="Second">
          <div className="List">
            <div>
              <img src={btn} alt="" />
            </div>
            <div>
              {" "}
              <h1>experience investor Technician.</h1>
            </div>
            {/*  */}
            <div className="">
              <img src={btn} alt="" />
            </div>
            <div>
              {" "}
              <h1>Your Electrical and Security System.</h1>
            </div>
            {/*  */}
            {/*  */}
            <div className="">
              <img src={btn} alt="" />
            </div>
            <div>
              {" "}
              <h1>sources whereas high standards</h1>
            </div>
            {/*  */} {/*  */}
            <div className="">
              <img src={btn} alt="" />
            </div>
            <div>
              {" "}
              <h1>Credibly innovate granular internal</h1>
            </div>
            {/*  */}
            {/*  */} {/*  */}
            <div className="">
              <img src={btn} alt="" />
            </div>
            <div>
              {" "}
              <h1>services for domestic and commercial.</h1>
            </div>
            {/*  */}
          </div>

          <div>
            <img src={ImageOne} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
