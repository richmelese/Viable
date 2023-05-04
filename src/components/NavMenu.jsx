import React from "react";
import "../../src/Styles/navmenu.css";
import log from "../../src/assets/log.png";
const NavMenu = () => {
  return (
    <div>
      <section className="NavMenu__section">
        <header className="header">
          <div className="logo">
            <a href="#">
              <img src={log} alt="" />
            </a>
          </div>
          <div className="navigation">
            <input type="checkbox" className="toggle-menu" />
            <div className="hamburger"></div>

            <ul className="menu">
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
                <a href="/solution">Solutions</a>
              </li>
              {/* <li>
                <a href="/news">products</a>
              </li> */}
              <li>
                <a href="/contact">
                  <button className="menu-contacus-btn">
                    <p class="btn-contact-us">Contact us</p>
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </header>
      </section>
    </div>
  );
};

export default NavMenu;
