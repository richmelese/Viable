import React from "react";
import "../../Style/Home/Homepartner.css";
import Slider from "./Slider";
import ourcliant from "../../Asset/Sub Text (4).png";
// import Fade from "react-reveal/Fade";

const HomePartner = () => {
  return (
    <div>
      <section>
        {/* <Fade bottom duration={1500}> */}
        <div className="Partners__Container">
          <div></div>
          <img className="ourcliantimg" src={ourcliant} alt="" />
          <div className="Partners__Text">
            Our Trusted Big Clients! <span className="Partners__span"></span>
          </div>
        </div>

        <Slider />
        {/* </Fade> */}
      </section>{" "}
    </div>
  );
};

export default HomePartner;
