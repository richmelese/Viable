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
            <a href="mailto:info@viablegt.com"> <span className="spanemail">Mail Us</span></a>
            
            <p>info@viablegt.com</p>
          </div>

          {/* <div class="two"> */}
          <div className="phone">
            <img className="headericon" src={phone} alt="" />{" "}
            <span className="spanemail">Call Us </span>
            <p> +971 52 790 8500</p>
          </div>
          <div className="social-media">
            {/* <div> */}
             <a href="#"><img src={Facebook} alt="" /></a> 
            {/* </div> */}
            {/* <div> */}
             <a href="#"><img src={Instagram} alt="" /></a> 
            {/* </div> */}
            {/* <div> */}
             <a href="#"> <img src={Twitter} alt="" /></a>
            {/* </div> */}
            {/* <div> */}
              <a href="#"><img src={Pin} alt="" /></a>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Header;
