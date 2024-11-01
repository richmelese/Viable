import React from "react";
import "../../Style/About/aboutservice.css";
import "../../Style/Home/Homeservice.css";
import team1 from "../../Asset/Photo (7).png";
import team2 from "../../Asset/Photo (8).png";
import team3 from "../../Asset/Photo (9).png";
import small from "../../Asset/Group_9008-removebg-preview.png";
const Aboutservice = (props) => {
  return (
    <div>
      <div className="grid_heading">
        <div
          className="
            smallservice"
        >
          <img className="" src={small} alt="" />
          our Team
        </div>
        <div>
          <h1 className="serviceheading">Meet Our Experts</h1>
        </div>
        <div>
          <p className="paragrap">
            Lorem ipsu aexped veniam laborum corporis, quidem quo natus unde .
          </p>
        </div>
      </div>
      <div className="grid_containerservice">
        {/* <h1>Our Service</h1> */}
        <div className="card">
          <img className="New-imgs" src={team1} alt="" />
          <div className="card-content">
            <h3>David James</h3>
            <h6 className="ceo__header">CEO</h6>
            {/* <p className="card-description">Lorem, ipsum dolor sit amet 
        impedit quae.</p>
        <div className="card-footer">
        <span className="plus-icon">+</span>
      </div> */}
          </div>
        </div>
        <div className="card">
          <img className="New-imgs" src={team2} alt="" />
          <div className="card-content">
            <h3>Kevin Martin</h3>
            <h6 className="ceo__header">CEO</h6>
          </div>
        </div>
        <div className="card">
          <img className="New-imgs" src={team3} alt="" />
          <div className="card-content">
            <h3 className="card-title"></h3>
            <h3>Sarrah Albert</h3>
            <h6 className="ceo__header">CEO</h6>
            {/* <h2 className="card-title">Logistics Services</h2> */}
            {/* <p className="card-description">Lorem, </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutservice;
