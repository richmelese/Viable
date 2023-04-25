import React from "react";
import "../../Styles/Business/businesscontact.css";
import Imageone from "../../assets/Bcontact-one.png";
import ImageTwo from "../../assets/Bcontact-two.png";
import ImageThree from "../../assets/Bcontact-three.png";
const BusinessContact = () => {
  return (
    <div>
      <section className="Bcontact-section">
        <p className="Header__business__contact">Lorem ipsum dolor sit amet</p>
        <div className="Bcontact__container">
          <div
            className="bc-image"
            style={{
              width: "100%",
              height: "25rem",
              backgroundImage: `url(${Imageone})`,
            }}
          >
            <p className="image-header">Packaging Solutions</p>
            <h6 className="image__paragraph">Warehouse Management</h6>
          </div>
          <div
            style={{
              width: "100%",
              height: "25rem",
              backgroundImage: `url(${ImageThree})`,
            }}
          >
            <p className="image-header">Packaging Solutions</p>
            <h6 className="image__paragraph">Warehouse Management</h6>
          </div>
          <div
            style={{
              width: "100%",
              height: "25rem",
              backgroundImage: `url(${ImageTwo})`,
            }}
          >
            <p className="image-header">Packaging Solutions</p>
            <h6 className="image__paragraph">Warehouse Management</h6>
          </div>
        </div>
        <div className="ContactB__container">
          <div className="contact-container">
            <div> </div>
            <div>
              {" "}
              <button>
                <p>
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
