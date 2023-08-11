import React from "react";
import "../../Styles/Business/businesscontact.css";
import Imageone from "../../assets/Bcontact-one.png";
import ImageTwo from "../../assets/Bcontact-two.png";
import ImageThree from "../../assets/Bcontact-three.png";
const BusinessContact = () => {
  return (
    <div>
      <section className="Bcontact-section">
        <p className="Header__business__contact">Our Products</p>
        <div className="Bcontact__container">
          <div>
            <div className="Shadow-contianer">
              <div
                className="bc-image"
                style={{
                  width: "100%",
                  height: "25rem",
                  backgroundImage: `url(${Imageone})`,
                }}
              ></div>
            </div>
            <div className="Teext-container">
              <p>Product</p>
              <h6>Retail</h6>{" "}
            </div>
          </div>
          <div>
            <div className="Shadow-contianer">
              <div
                className="bc-image"
                style={{
                  width: "100%",
                  height: "25rem",
                  backgroundImage: `url(${ImageThree})`,
                }}
              ></div>
            </div>
            <div className="Teext-container">
              <p>Product</p>
              <h6>Foodstuff</h6>{" "}
            </div>
          </div>
          <div>
            <div className="Shadow-contianer">
              <div
                className="bc-image"
                style={{
                  width: "100%",
                  height: "25rem",
                  backgroundImage: `url(${ImageTwo})`,
                }}
              ></div>
            </div>
            <div className="Teext-container">
              <p>Product</p>
              <h6>Consttruction</h6>{" "}
            </div>
          </div>
        </div>
        <div className="ContactB__container">
          <div className="contact-container">
            <div> </div>
            <div>
              {" "}
              <button>
                <p>
                  <a href="/contact">
                    <span>Contact Us</span>
                  </a>
                </p>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessContact;
