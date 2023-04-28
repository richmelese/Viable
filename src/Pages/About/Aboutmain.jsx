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
              Guaranteeing Strategic Sourcing & Supply Services. We Bring the
              World Right to You
            </p>
            <h6>
              A well-known general trading company in Dubai, Viable General
              Trading specializes in supply and procurement and has strong
              financial capabilities. We work with a broad range of products
              from numerous industries, such as the metal and constraction
              markets.
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
