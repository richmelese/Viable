import React from "react";
import "./footer.css";
import Logo from "../../images/image 4.png";
import Mail from "../../images/Message (2).png";
import Call from "../../images/Message.png";
import Location from "../../images/Message (1).png";
import Facebook from "../../images/2.png";
import Instagram from "../../images/1.png";
import Twitter from "../../images/3.png";
import Pin from "../../images/4.png";
const footer = () => {
  return (
    <div>
      <div className="All__Footer">
        <div className="Footer-Log-Container">
          <div className="Logo-container">
            <img src={Logo} alt="" />
          </div>
          <div className="Icon-container">
            <div>
              <img src={Mail} alt="" />
            </div>
            <div>
              <h2>Mail</h2>
              <h4>Info@Viable.com</h4>
            </div>
          </div>
          <div className="Icon-container">
            <div>
              <img src={Call} alt="" />
            </div>
            <div>
              <h2>Call</h2>
              <h4> +971 52 790 8500</h4>
            </div>
          </div>{" "}
          <div className="Icon-container">
            <div>
              <img src={Location} alt="" />
            </div>
            <div>
              <h2>Location</h2>
              <h4 className="location-header">Dubai</h4>
            </div>
          </div>
          <hr className="Footer-hr" />
        </div>
        {/*  */}
        <div className="Footer-Container">
          <div>
            <p>
              A well-known general trading company in Dubai, Viable General
              Trading specializes in supply and procurement and has strong
              financial capabilities. We work with a broad range of products
              from numerous industries, such as the metal and constraction
              market
            </p>
            <div className="Social-log">
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
          <div className="Second-footer">
            <h6>Explore</h6>
            <ul>
              <li>About us</li>
              <li>Solution</li>
              <li>Offers</li>
              <li>Pricing</li>
              <li>FAQ</li>
            </ul>
            <hr className="Vertical-hr" />
          </div>
          <div>
            <h6>Quick Links</h6>
            <ul>
              <li>Services</li>
              <li>Blogs</li>
              <li>Contact Us</li>
            </ul>
            <hr className="Vertical-hr-two" />
          </div>{" "}
        </div>
        <hr className="Footer-hr" />
        <h2 className="Bitapps__Con">
          © 2023 | Designed and developed by{" "}
          <a href="https://bitappstech.com/">Bitappstech</a>
        </h2>
      </div>
    </div>
  );
};

export default footer;
