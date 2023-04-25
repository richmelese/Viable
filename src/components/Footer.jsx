import React from "react";
import "../../src/Styles/footer.css";
import Log from "../../src/assets/log.png";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
const Footer = () => {
  return (
    <div>
      {/* Log */}
      <div className="log__content">
        <img src={Log} alt="" />
      </div>
      {/*============================  */}
      <div className="footer__main ">
        <div>
          <p>Delivering Excellence in Every trade.</p>
        </div>
        <div>
          <h6 className="footer__email">
            <h2> Enter your email to get the laterst news</h2>
            <div class="user-box">
              <input
                type="text"
                placeholder="Email Address"
                name=""
                required=""
              />
            </div>
          </h6>
        </div>
      </div>
      {/* ===============footer list============ */}
      <div className="footer__menu__container">
        <div>
          <ul className="social">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>{" "}
            </li>
            <li>
              <a href="/Busines">Business Activities</a>
            </li>
            <li>
              <a href="/solution">Solutions</a>
            </li>
            <li>
              <a href="/news">products</a>
            </li>
          </ul>
        </div>
        <div className="socail__header">
          <p className="follow-text"> Follw on</p>
          <ul>
            <li className="social__media__icons">
              <span className="dot">
                {" "}
                <BsFacebook className="icons" />
              </span>
            </li>
            <li className="social__media__icons">
              <span className="dot">
                {" "}
                <BsInstagram className="icons" />
              </span>
            </li>{" "}
            <li className="social__media__icons">
              <span className="dot">
                {" "}
                <BsTelegram className="icons" />
              </span>
            </li>{" "}
            <li className="social__media__icons">
              <span className="dot">
                {" "}
                <BsYoutube className="icons" />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;