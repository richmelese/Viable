import React from "react";
import "../../src/Styles/menu.css";
import log from "../../src/assets/log.png";
const menu = () => {
  return (
    <div>
      <div className="menu__content">
        <div>
          <a href="">
            <img src={log} alt="" />
          </a>
        </div>
        <div>
          {/* <input class="side-menu" type="checkbox" id="side-menu" />
          <label class="hamb" for="side-menu">
            <span class="hamb-line"></span>
          </label> */}
          <nav class="nav">
            <ul class="menu">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>{" "}
              </li>
              <li>
                <a href="#BusinessActivities">Business Activities</a>
              </li>
              <li>
                <a href="#solution">Solutions</a>
              </li>
              <li>
                <a href="#product">products</a>
              </li>
              <li>
                <a>
                  <button className="menu-contacus-btn">
                    <p class="btn-contact-us">Contact us</p>
                  </button>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default menu;
