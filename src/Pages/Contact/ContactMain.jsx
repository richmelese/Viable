import React from "react";
import "../../Styles/Contact/contactmain.css";
import ContactBk from "../../assets/Photo.png";
const ContactMain = () => {
  return (
    <div>
      <section>
        <div className="Contact__Bk">
          <img src={ContactBk} alt="" />
        </div>
        {/* Mian section */}
        <div className="All__contact">
          <h1>Contact Us</h1>
          <div className="contact__form__container">
            <div></div>
            <div className="form__contact">
              <div className="form__inline">
                <div className="first-input">
                  <label for="fname">First Name</label>
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="Your name.."
                  />
                </div>
                <div>
                  <label for="lname">Last Name</label>
                  <input
                    type="text"
                    id="lname"
                    name="lastname"
                    placeholder="Your last name.."
                  />
                </div>
              </div>
              <label for="country">Email</label>
              <input
                type="email"
                id="lname"
                name="lastname"
                placeholder="enter your email.."
              />
              <label for="country">Phone Number</label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Phone Number.."
              />
              <label for="subject">Subject</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
                // style="height:200px"
              ></textarea>
              <button className="Send__btn">
                <p>
                  <span>Send Message</span>
                </p>
              </button>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactMain;
