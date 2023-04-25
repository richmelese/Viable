import React from "react";
import "../../Styles/About/aboutmain.css";
import Solutionone from "../../assets/Soln-one.png";
import Soultiontwo from "../../assets/soln-two.png";
import Solutionthree from "../../assets/soln-three.png";
import dotted from "../../assets/Dotted Shape.png";
const Aboutmain = () => {
  return (
    <div>
      <section>
        <div className="about__header">
          <div>
            <p>ABOUT</p>
          </div>
          <div>
            <hr />
          </div>
        </div>
        {/* Main section */}
        <div className="about__main__content">
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur. In sit semper sit lobortis
              velit. Sit mauris ornare id ultrices laoreet vestibulum auctor
              diam.
            </p>
            <h6>
              Lorem ipsum dolor sit amet consectetur. Risus pretium volutpat
              praesent massa amet et sem viverra orci. Purus vitae morbi nulla
              sagittis faucibus. Lorem ipsum dolor sit amet consectetur. Risus
              pretium volutpat praesent massa amet et sem viverra orci. Purus
              vitae morbi nulla sagittis faucibus.
            </h6>
          </div>
          <div>
            <img src={Solutionone} alt="" />
          </div>
          <div className="about__main__row">
            <img src={Soultiontwo} alt="" />
            <img src={Solutionthree} alt="" />
          </div>
          <div className="dotted__row">
            <img src={dotted} alt="" />
            <img src={dotted} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutmain;
