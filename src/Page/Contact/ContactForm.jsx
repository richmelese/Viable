import React from "react";
import "../../Style/Contact/ContactForm.css";
import small from "../../Asset/Group_9008-removebg-preview.png";

const ContactForm = () => {
  return (
    <div>
      <div className="ContacForm__Container">
        <div className="smallservice">
          <img className="Small-icon" src={small} alt="" />
          Contact Us
        </div>
        <h1>Get In Touch</h1>
        <form action="">
          <div className="Main__Form">
            <div className="First">
              <div>
                <input type="text" name="" id="" placeholder="Fisrt Name" />
              </div>
              <div>
                <input type="text" placeholder="Last Name" />
              </div>
            </div>
            <div className="Second">
              <div>
                <input type="email" name="" id="" placeholder="Email" />
              </div>
              <div>
                <input type="text" placeholder="Phone Number" />
              </div>
            </div>
            {/*  */}
            <div className="Third">
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="four">
              {" "}
              <textarea
                placeholder="Your Message"
                rows="10"
                cols="90"
              ></textarea>
              <button>Submite</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
