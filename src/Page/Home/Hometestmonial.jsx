import React from "react";
import TestimonialSlider from "./TestimonialSlider";
import "../../Style/Home/Hometestmonial.css";
import iconss from "../../Asset/Icon.png";
import qeution from "../../Asset/Sub Text (1).png";
import testi from "../../Asset/Sub Text (3).png";
const Hometestmonial = () => {
  return (
    <section>
      <div className="grid_testmonial">
        <div className="qeution">
          <img className="" src={qeution} alt="" />
        </div>
        <div className="testi">
          <img className="" src={testi} alt="" />
        </div>

        <div className="testquestion">
          <h2>99.9% Customer Satisfation Based</h2>
          <p>
            If you have any questions or need help contact with our team, or
            call
          </p>
          <h3>
            <img className="iconphone" src={iconss} alt="" />
            +971 52 790 8500
          </h3>
        </div>

        <div className="testimonia">
          <TestimonialSlider />
        </div>
      </div>
    </section>
  );
};

export default Hometestmonial;
