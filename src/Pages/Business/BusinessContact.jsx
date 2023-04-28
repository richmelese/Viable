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
          <div
            className="bc-image"
            style={{
              width: "100%",
              height: "25rem",
              backgroundImage: `url(${Imageone})`,
            }}
          >
            <p className="image-header">Product</p>
            <h6 className="image__paragraph">
              Construction and Building Material
            </h6>
          </div>
          <div
            style={{
              width: "100%",
              height: "25rem",
              backgroundImage: `url(${ImageThree})`,
            }}
          >
            <p className="image-header">Product</p>
            <h6 className="image__paragraph">Foodstuff Products</h6>
          </div>
          <div
            style={{
              width: "100%",
              height: "25rem",
              backgroundImage: `url(${ImageTwo})`,
            }}
          >
            <p className="image-header">Products</p>
            <h6 className="image__paragraph">Hospitality – Hotel Supply</h6>
          </div>
        </div>
        <div className="ContactB__container">
          <div className="contact-container">
            <div> </div>
            <div>
              {" "}
              <button>
                <p>
                  <a href="/contact"></a>
                  <span>Contact Us</span>
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
