import React from "react";
import IconOne from "../../images/desc-icon (1).png";
import IconTwo from "../../images/desc-icon (2).png";
import IconThree from "../../images/desc-icon (3).png";
import IconFour from "../../images/desc-icon (4).png";
const HomeDecrption = () => {
  return (
    <div>
      <div className="HD__desc">
        <div>
          <h1>Description</h1>
          <p>
            Involves the transportation of goods and merchandise via aircraft.
            It's a fast and efficient mode of shipping that is particularly
            suitable for perishable, high-value, time-sensitive, or lightweight
            goods. Here are key aspects of air freight shipping:
          </p>
          {/*  */}
          <div className="Color-bg">
            <div className="first"></div>
            <div style={{ backgroundColor: "#00C5DF" }} className="second">
              <p>
                Speed and Efficiency: Air freight is the fastest mode of
                transportation for goods over long distances. It allows for
                quick delivery, often within a few days, making it ideal for
                urgent shipments.
              </p>
            </div>
          </div>
          <h4 className="Haeder-four">
            Global Reach: Air freight enables access to a vast network of
            airports and destinations worldwide, allowing businesses to reach
            international markets efficiently.
          </h4>
        </div>
        <div></div>
      </div>
      {/*  */}
      <div className="Second__Descrption">
        <div className="Time">
          <div className="Detail">
            <div>
              <img src={IconThree} alt="" />
            </div>
            <div>
              <h1>24/7 Availability</h1>
              <p>Available at any time and usually, every day</p>
            </div>
            {/*  */}
            <div className="new-con-img">
              <img src={IconTwo} alt="" />
            </div>
            <div className="new-con">
              <h1>Process Technology</h1>
              <p>
                The products and services produced and offered by the compan.
              </p>
            </div>
            {/*  */}
          </div>
          <div className="Detail">
            <div>
              <img src={IconOne} alt="" />
            </div>
            <div>
              <h1>Affordable Price</h1>
              <p>competitive price for the Product(s)</p>
            </div>
            {/*  */}
            <div className="new-con-img">
              <img src={IconFour} alt="" />
            </div>
            <div className="new-con">
              <h1>Free Estimation</h1>
              <p>Creating a custom estimate with Billdu takes mere moments.</p>
            </div>
            {/*  */}
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default HomeDecrption;
