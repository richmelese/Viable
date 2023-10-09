import React from "react";
import "../../Style/Home/Homesecondmain.css";
import back from "../../Asset/Bgphoto.jpg";
const Homesecondmain = () => {
  return (
    <section>
      <div className="heading">
        <img className="New-imgs" src={back} alt="" />
        <div className="headingone">We Provide Quality Services</div>
        <div className="headingtow">
          Contact us today to learn more about <br /> our services.{" "}
        </div>
        {/* <button className="main_button"><p>Contact us</p></button> */}
        <div>
          <button className="main_button">
            <p>Contact us</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Homesecondmain;
