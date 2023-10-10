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
            When considering air freight shipping for your logistics and supply
            chain needs, there are several key benefits that can significantly
            impact your business operations
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
              <h1>Speed of Delivery .</h1>
            </div>
            {/*  */}
            <div className="">
              <img src={btn} alt="" />
            </div>
            <div>
              {" "}
              <h1>Reliability and Consistency .</h1>
            </div>
            {/*  */}
            {/*  */}
            <div className="">
              <img src={btn} alt="" />
            </div>
            <div>
              {" "}
              <h1>Global Reach:</h1>
            </div>
            {/*  */} {/*  */}
            <div className="">
              <img src={btn} alt="" />
            </div>
            <div>
              {" "}
              <h1>Reduced Transit Time</h1>
            </div>
            {/*  */}
            {/*  */} {/*  */}
            <div className="">
              <img src={btn} alt="" />
            </div>
            <div>
              {" "}
              <h1>Time-Sensitive Shipments</h1>
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
