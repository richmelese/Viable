import React from "react";
import "../../Style/Contact/Contact.css";
import background from "../../images/Photo.png";
import small from "../../Asset/Group_9008-removebg-preview.png";
import Vector from "../../images/Vector.png";
import Person from "../../images/person.png";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div>
      <div
        className="Contact__Container"
        style={{ backgroundImage: `url(${background})` }}
      >
        <h1>Contact Us </h1>
      </div>
      <div className="smallservice">
        <img className="Small-icon" src={small} alt="" />
        Quick Contact{" "}
      </div>
      {/*  */}
      <div className="Main-contact">
        <h2>Contact Details</h2>
        {/* <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
          pariatur a quas eos delectus accusamus laboriosam rem, voluptatem
          fugit hic magni corrupti non magnam voluptatibus facilis fugiat
          similique voluptates ea!
        </p> */}
      </div>
      {/*  */}
      <div className="Contact__box">
        <div style={{ backgroundColor: "#00C5DF" }} className="first">
          <img src={Vector} alt="" />
          <h3>Emergency Works</h3> <h4>+971 52 790 8500</h4>
          <button>Call Us</button>
        </div>
        <div
          id="Next"
          style={{ backgroundColor: "#1C2752" }}
          className="second"
        >
          <p>Main Branch</p>
          <h4>Address :</h4>
          <h5>Addis Ababa, Ethiopia</h5>
          <hr className="Contact-hr" />
          <h4>Phone :</h4>
          <h5>+971 52 790 8500</h5>
          <hr className="Contact-hr" />
          <h4>Mail :</h4>
          <h5>Info@Viable.com</h5>
          <hr className="Contact-hr" />
        </div>
        <div style={{ backgroundColor: "#00C5DF" }} className="Third">
          <img src={Person} alt="" />
          <h2>You Have a Question?</h2>
          <h3>+971 52 790 8500</h3>
          <button>Reach Us</button>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
