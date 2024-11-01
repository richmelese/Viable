import React from "react";
import "../menu/menu.css";
import { Link } from "react-router-dom";
import Log from "../../Asset/logo.png";
const Menu = () => {
  return (
    <div>
      <section className="NavMenu__section">
        <header className="header">
          <div className="logo">
            <a href="/">
              <img src={Log} alt="" />
            </a>
          </div>
          <div className="navigation">
            <input type="checkbox" className="toggle-menu" />
            <div className="hamburger"></div>

            <ul className="menu">
              <li>
                <Link to="/">Home</Link>
                {/* <a href="/">Home</a> */}
              </li>
              <li>
                <Link to="/about">About</Link>{" "}
                {/* <a href="/about">About</a> */}
              </li>
              <li>
                <Link to="/Solution">Service</Link>
                {/* <a href="/Solution">Solution</a> */}
              </li>
              <li>
                <Link to="/homedetail">Business Activities</Link>
                {/* <a href="/businessactivites">BusinessActivites</a> */}
              </li>
              <li>
                <a href="/contactus">
                  <button className="menu-contacus-btn">
                    <p class="btn-contact-us">Contact Us</p>
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

export default Menu;
