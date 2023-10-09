import React from "react";
import "../Components/header.css";
import email from "../Asset/emailicon-removebg-preview.png";
import phone from "../Asset/Phoneicon-removebg-preview.png";
import Facebook from "../Asset/Fbb.svg";
import Instagram from "../Asset/Instagram.svg";
import Twitter from "../Asset/Twiterrr.svg";
import Pin from "../Asset/Pintrest.svg";
const Header = () => {
  return (
    <div class="header-top-bar">
      <div class="container">
        <div class="grid_header">
          <div className="one">
            <i class="icofont-support-faq mr-2"></i>
            <p>Opening Hours: 06:00 to 20:00</p>
          </div>
          <div className="email">
            <i class="email"></i>
            <img className="headericon" src={email} alt="" />
            <span className="spanemail">MailUS</span>
            <p>Info@Viable.com </p>
          </div>

          {/* <div class="two"> */}
          <div className="phone">
            <img className="headericon" src={phone} alt="" />{" "}
            <span className="spanemail">Call Us </span>
            <p> +971 52 790 8500</p>
          </div>
          <div className="social-media">
            <div>
              <img src={Facebook} alt="" />
            </div>
            <div>
              <img src={Instagram} alt="" />
            </div>
            <div>
              <img src={Twitter} alt="" />
            </div>
            <div>
              <img src={Pin} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Header;
