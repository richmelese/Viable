import React from "react";
import "../../Styles/Home/homeabout.css";
import HomeAbouts from "../../assets/Home-about.png";
import Avatar from "../../assets/avatr.jpg";
const HomeAbout = () => {
  return (
    <div>
      {/* About Section */}
      <section id="about">
        <div className="HAbout__content">
          <div>
            <p>ABOUT</p>
          </div>
          <div>
            <hr />
          </div>
        </div>
        {/* ============paragraph=============== */}
        <div className="HAbout__paragraph">
          {" "}
          <p>
            A well-known general trading company in Dubai, Viable General
            Trading specializes in supply and procurement and has strong
            financial capabilities. We work with a broad range of products from
            numerous industries, such as the metal and constraction markets.
          </p>
        </div>
        {/* ==================Image section========================== */}
        <div className="HAbout__Image__content">
          <div>
            <img src={HomeAbouts} alt="" />
          </div>
          <div className="Image__row">
            <div className="first">
              <div>
                <img className="avatar" src={Avatar} alt="" />
              </div>

              <div className="two__rows">
                {" "}
                <p>Leuleseged</p>
                <h6>CEO of viabel</h6>
              </div>
            </div>
            <div>
              <p className="second">
                Viable also specializes in multisector procurement and supply,
                providing clients from all around the world with one-stop
                shopping.
              </p>
              <button className="HA__btn">
                <p>
                  <span>Learn More</span>
                </p>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeAbout;
