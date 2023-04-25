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
              width: "109.5%",

              height: "31rem",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>

        {/* ---------White background-------- */}
        <div className="White__header">
          <div>
            <p>Lorem ipsum dolor sit amet consectetur. Fermentum.</p>
            <h6>
              Lorem ipsum dolor sit amet consectetur. Dolor sem ipsum fringilla
              id dictumst nibh facilisi mollis fames. Feugiat mi aenean
              convallis ut natoque. Eget metus in eu id sit malesuada metus odio
              suspendisse. Turpis lorem facilisi metus aliquet libero bibendum
              volutpat. Lectus eu tempus eget in eget malesuada ullamcorper nunc
              nec. Diam diam.
            </h6>
            <div className="whole__rows">
              <div className="second-row">
                <div className="icon-grid">
                  {" "}
                  <img className="icon__images" src={icons} alt="" />
                  <p>Lorem ipsum</p>
                  <img className="icon__images" src={icons} alt="" />
                  <p>Lorem ipsum</p>
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
            <h6>Lorem ipsum dolor</h6>
          </div>
          <div className="hr__about">
            <hr />
          </div>
          <div>
            <div className="first__number__container">
              <p>3594</p>
              <img className="pattern__image" src={pattern} alt="" />
              <h6>Lorem ipsum dolor</h6>
            </div>
          </div>
        </div>
        <hr />
      </section>
    </div>
  );
};

export default aboutwhyus;
