import React from "react";
import "../../src/Styles/footercontact.css";
const FooterContact = () => {
  return (
    <div>
      <div className="Full__container Cfooter__content">
        <div>
          <p>Contact us today to learn more about our services.</p>
        </div>
        <div className="cfooter__second">
          <h6>
            Contact us below to work together to build your amazing Business
          </h6>
          <button>
            <p>
              <span>
                <a className="contact__para" href="/contact">
                  Contact us
                </a>
              </span>
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
