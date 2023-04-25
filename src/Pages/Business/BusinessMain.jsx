import React from "react";
import "../../Styles/Business/businessmain.css";
import BusinessBanner from "../../assets/bus_banner.png";
const BusinessMain = () => {
  return (
    <div>
      <section className="container">
        <div className="business__container">
          <div className="first__coloumn">
            {" "}
            <p>Watch Our Intro Video</p>
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <h6>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at
              quam fringilla, scelerisque nisl in, accumsan diam. Quisque
              sollicitudin risus eu tortor euismod imperdiet.{" "}
            </h6>
            <button>
              <p>
                <span>Contact Us</span>
              </p>
            </button>
          </div>
          <div>
            <img src={BusinessBanner} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessMain;
