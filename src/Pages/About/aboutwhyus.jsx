import React from "react";
import "../../Styles/About/aboutwhyus.css";
import Background from "../../assets/Photo.png";
import Plane from "../../assets/Photo@2x.png";
import NewPhoto from "../../assets/new-photo.png";
import icons from "../../assets/Icon.png";
import pattern from "../../assets/Pattern.png";
const aboutwhyus = () => {
  return (
    <div>
      <section>
        <div className="whyus__image__container">
          <div
            className="whyus__image"
            style={{
              backgroundImage: `url(${Background})`,
            }}
          ></div>
        </div>

        {/* ---------White background-------- */}
        <div className="White__header">
          <div>
            <p>Viable: Quality Products and Services Guaranteed for You</p>
            <h6>
              Apart from commodity trading, Viable general Trading in Dubai also
              offers bespoke other key services including procurement and
              supply, import & exportation Ecommerce, and logistic & shipping
              solutions to customers around the world.
            </h6>
            <div className="whole__rows">
              <div className="second-row">
                <div className="icon-grid">
                  {" "}
                  <img className="icon__images" src={icons} alt="" />
                  <p>Quality Products </p>
                  <img className="icon__images" src={icons} alt="" />
                  <p>Services Guaranteed</p>
                </div>

                <div>
                  <img src={NewPhoto} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <img className="plane__image" src={Plane} alt="" />
          </div>
        </div>

        {/* ===============new container============== */}
        <hr />
        <div className="about__number__container">
          <div className="first__number__container">
            <p>1294</p>
            <img className="pattern__image" src={pattern} alt="" />
            <h6>Ecommerce</h6>
          </div>
          <div className="hr__about">
            <hr />
          </div>
          <div>
            <div className="first__number__container">
              <p>3594</p>
              <img className="pattern__image" src={pattern} alt="" />
              <h6>Import and Export</h6>
            </div>
          </div>
        </div>
        <hr />
      </section>
    </div>
  );
};

export default aboutwhyus;
