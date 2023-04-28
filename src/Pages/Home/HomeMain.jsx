import React from "react";
import "../../Styles/Home/homemain.css";
import HomeBanner from "../../assets/home-banner.png";

const HomeMain = () => {
  return (
    <div>
      {" "}
      {/* First Content */}
      <section id="home">
        <div className="main__content">
          <div>
            <p>Delivering Excellence in Every trade.</p>
          </div>
          <div className="hr__div">
            {" "}
            <hr />
          </div>
          <div className="right">
            <p>
              2023<br></br> ALL RIGHT RESERVED
            </p>
          </div>
        </div>
      </section>
      {/* second section */}
      <section>
        <div className="image__content">
          <div></div>
          <div>
            <ul>
              <li>
                <p>350+</p>
              </li>
              <li>
                <h6>Project Completed</h6>
              </li>
              <li>
                <p>350+</p>
              </li>
              <li>
                <h6>Partner Brand</h6>
              </li>{" "}
              <li>
                <p>350+</p>
              </li>
              <li>
                <h6>Team Member</h6>
              </li>
            </ul>
          </div>
        </div>
        <div className="banner__image">
          <img src={HomeBanner} alt="" />
        </div>
      </section>
    </div>
  );
};

export default HomeMain;
