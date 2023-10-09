import React from "react";
import form from "../../Asset/Rectangle 4598.jpg";
import blue from "../../Asset/Rectangle 4600.jpg";
import "../../Style/Home/Homeform.css";
const Homeform = () => {
  return (
    <section>
      <div className="grid_form">
        {/* <img className="formimage" src={form} alt="" /> */}
        {/* <img className="coverimg" src={blue} alt="" /> */}

        <div className="containerform">
          <h2>Application Form</h2>
          <form id="signup-form">
            <div class="form-group">
              <i class="bx bx-Profile"></i>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Name"
              ></input>
            </div>

            <div class="form-group">
              <label for="email"></label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="EmailAddress"
              ></input>
            </div>
            <div class="form-group">
              <label for="phone"></label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="phonnumber"
              ></input>
            </div>
            <div class="form-group">
              <label for="date"></label>
              <input
                type="date"
                id="date"
                name="date"
                pattern="{dd}{mm}{yy}"
                required
                placeholder="Date"
              ></input>
            </div>
            <div class="form-group">
              <label for="message"></label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Enter your decription"
              ></textarea>
            </div>
            <div class="error-message" id="error-message"></div>
            <button type="submit" class="submit-button">
              Submit
            </button>
          </form>
        </div>
        <img className="coverimg" src={blue} alt="" />
      </div>
    </section>
  );
};

export default Homeform;
