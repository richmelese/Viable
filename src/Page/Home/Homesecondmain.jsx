import React from "react";
import "../../Style/Home/Homesecondmain.css";
import back from "../../Asset/Bgphoto.jpg";
import setting from"../../Asset/seeting (2).png";
const Homesecondmain = () => {
  return (
    <section>
      <div className="heading">
        <img className="New-imgs" src={back} alt="" />
        {/* <div className="headingone"><img id="settings"className="setting" src={setting} alt="" />We Provide Quality Services</div> */}
        <div className="headingone">
        <img id="settings"className="setting" src={setting} alt="" /><p>We Provide Quality Services</p>
        </div>
        <div className="headingtow">
          Contact us today to learn more about <br /> our services.{" "}
        </div>
        {/* <button className="main_button"><p>Contact us</p></button> */}
        <div>
          <button className="main_button">
            <p>
              <a href="/contactus">Contact us</a>
            </p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Homesecondmain;
