import React from "react";
import "../../src/Styles/footer.css";
import Log from "../../src/assets/log.png";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import Vector from "../assets/footer-vec.png";
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
            <a href="#">
              {" "}
              <img class="Footer_icons" src={Vector} alt="" />
            </a>

            <form class="user-box">
              <input
                type="email"
                placeholder="Email Address"
                name="Email"
                required=""
                id="email"
              />
            </form>
          </h6>
        </div>
      </div>
      {/* ===============footer list============ */}
      <div className="footer__menu__container">
        <div>
          <ul className="social">
            <li>
              <a href="./">Home</a>
            </li>
            <li>
              <a href="/about">About</a>{" "}
            </li>
            <li>
              <a href="/Business">Business Activities</a>
            </li>
            <li>
              <a href="/solution">Solution</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="socail__header">
          <p className="follow-text"> Follw Us On</p>
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
      {/* ==============================Bitapps===================== */}
      <div className="bitapps__container">
        <p>
          © 2023 | Designed and developed by{" "}
          <a href="https://bitappstech.com/">bitappstech</a>{" "}
        </p>
        <hr />
      </div>
    </div>
  );
};

export default Footer;
