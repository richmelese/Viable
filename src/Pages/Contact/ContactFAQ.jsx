import React from "react";
import "../../Styles/Contact/contactfaq.css";
import FAQpicture from "../../assets/faq.png";
import Demo from "./demo";
import Call from "../../assets/call.png";
const ContactFAQ = () => {
  return (
    <div>
      <section>
        <div className="faq__container">
          <div className="">
            <p>
              {/* <hr /> */}
              FAQ
            </p>
            <h1>
              Frequently Asked<br></br> Questions
            </h1>
            <Demo />
          </div>
          <div className="talk__container">
            <p>Let’s Talk</p>
            <h1>You need any help? get free consultation</h1>
            <div className="call__container">
              <div>
                <img src={Call} alt="" />
              </div>
              <div>
                <h2>Have Any Questions +971 52 790 8500</h2>
              </div>
            </div>
            <p className="contact">Contact Us</p>
          </div>

          <div>
            <img src={FAQpicture} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactFAQ;
