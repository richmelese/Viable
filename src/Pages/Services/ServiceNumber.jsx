import React from "react";
import "../../Styles/Services/servicenumber.css";
import ServNumber from "../../assets/ser-num.png";
import Plus from "../../assets/plus.png";
const ServiceNumber = () => {
  return (
    <div>
      <section>
        <div className="Service__number">
          <div>
            <h1>Our Stainless-Steel Cleaning and Polishing Services</h1>
            <p>
              Traderston stainless steel cleaning services specializes in
              providing the following services:
            </p>
          </div>
          <div className="ser__hr">
            <hr />
          </div>
          <div>
            <img src={ServNumber} alt="" />
            <div className="sub__number">
              <div>
                <h1>874</h1>
              </div>
              <div>
                <p>Stainless Steel Architectural Structure Cleaning</p>
              </div>
              <div className="plus__img">
                <img src={Plus} alt="" />
              </div>
              <div className="new__section">
                <h1>1294</h1>
              </div>
              <div className="para__row">
                <p>Stainless Steel Industrial Structures Cleaning</p>
              </div>
              <div className="plus__img new__plus">
                <img src={Plus} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceNumber;
