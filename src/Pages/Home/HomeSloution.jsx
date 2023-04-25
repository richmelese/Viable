import React from "react";
import "../../Styles/Home/homesolution.css";
import Solutionone from "../../assets/Soln-one.png";
import Soultiontwo from "../../assets/soln-two.png";
import Solutionthree from "../../assets/soln-three.png";
const HomeSloution = () => {
  return (
    <div>
      {/* ====header section==== */}
      <section id="solution">
        <div className="SH__content">
          <div>
            <p>SOULTION</p>
          </div>
          <div>
            <hr />
          </div>
        </div>
        {/*===========main section====  */}
        <div className="Sh__main__content">
          <div>
            <p>Viableoffers innovative solutions to meet the unique demands.</p>
            <h6>
              Our team of experienced professionals leverages the latest
              technology and industry knowledge to provide efficient and
              cost-effective solutions to our clients. We believe in delivering
              customized solutions that are tailored to meet the specific needs
              of our clients.
            </h6>
            <button>
              <p>
                <span>See Materials</span>
              </p>
            </button>
          </div>
          <div className="solution__one">
            <img className="solution__one" src={Solutionone} alt="" />
          </div>
          <div className="soultion__row">
            <img src={Soultiontwo} alt="" />
            <img src={Solutionthree} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSloution;
