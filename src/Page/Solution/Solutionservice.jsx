import React from "react";
import "../../Style/Soultion/Solutionservice.css";
import Newbg from "../../Asset/card1.png";
import cards2 from "../../Asset/card2.png";
import cards4 from "../../Asset/card3.png";
import small from "../../Asset/Group_9008-removebg-preview.png";
import cards5 from "../../Asset/unsplash_NvqYkDPE0Rw (4).png";
import cards6 from "../../Asset/unsplash_NvqYkDPE0Rw (5).png";
import cards7 from "../../Asset/unsplash_NvqYkDPE0Rw (6).png";
import plus from"../../Asset/iconread.jpg";
const Solutionservice = (props) => {
  return (
    <div>
      <div className="grid_heading">
        <div
          className="
            smallservice"
        >
          <img className="" src={small} alt="" />
          Our Services
        </div>
        <div>
          <h1 className="serviceheading">Our Service</h1>
        </div>
        <div>
          <p className="paragrap">
            Viable General Trading is a one-stop solution for all your trading
            needs. We provide a wide range of services to cater to the diverse
            needs of our clients. Our services include procurement of quality
            products, logistics and transportation, documentation, and customs
            clearance.
          </p>
        </div>
      </div>
      <div className="grid_containerservice">
        {/* <h1>Our Service</h1> */}
        <div className="card">
          <img className="New-imgs" src={Newbg} alt="" />
          <div className="card-content">
            <h2 className="card-title">Import and Export</h2>
            <hr className="Services-header" />
            <p className="card-description">
              Viable import and export services UAE has helped many businesses
              and individuals maneuver the lengthy and complicated process of
              importing and exporting goods. Our import and export service UAE
              team aim to reduce paperwork, navigate new regulations, minimize
              shipping costs, and expedite transit with tailored services,{" "}
            </p>
            <div className="card-footerblog">
              <div className="read">
                {" "}
                <a href="#">ReadMore</a>
              </div>
              <div className="pluss"><img className="plusicon" src={plus} alt="" /></div>
            </div>
          </div>
        </div>
        <div className="card">
          <img className="New-imgs" src={cards2} alt="" />
          <div className="card-content">
            <h2 className="card-title">Stainless Steel Cleaning</h2>
            <hr className="Services-header" />

            <p className="card-description">
              Viable Stainless Steel Cleaning and Polishing services offer the
              best solution for cleaning, restoring, and preserving original
              stainless steel finish. Our quality of work speaks for itself.
              With us, it is easy to differentiate between pretreated and
              treated stainless steel.
            </p>
            <div className="card-footerblog">
              <div className="read">
                {" "}
                <a href="#">ReadMore</a>
              </div>
              <div className="plusssecond"><img className="plusicon" src={plus} alt="" /></div>
            </div>
          </div>
        </div>
        <div className="card">
          <img className="New-imgs" src={cards4} alt="" />
          <div className="card-content">
            <h2 className="card-title">Outsourcing Services</h2>
            <hr className="Services-header" />

            <p className="card-description">
              It’s easy to see how a simple procurement solution can improve and
              enhance business activities. A smooth journey, from product
              sourcing and invoice payments to supplier management. Procurement
              solutions can save on cost and enhance process efficiencies, which
              in turn, add value to the business
            </p>
            <div className="card-footerblog">
              <div className="read">
                {" "}
                <a href="#">ReadMore</a>
              </div>
              <div className="pluss"><img className="plusicon" src={plus} alt="" /></div>
            </div>
          </div>
        </div>
        <div className="card">
          <img className="New-imgs" src={cards5} alt="" />
          <div className="card-content">
            <h2 className="card-title">Logistics Services</h2>
            <hr className="Services-header" />

            <p className="card-description">
            Handle the transportation process from origin to destination, optimizing routes, coordinating carriers, and ensuring on-time deliveries. 
            Utilize tracking and monitoring systems for real-time visibility.
            minimizing costs, 
            and enhancing overall efficiency for import and export operations
            Implement advanced logistics software and technology solutions for automation, 
          
            </p>
            <div className="card-footerblog">
              <div className="read">
                {" "}
                <a href="#">ReadMore</a>
              </div>
              <div className="pluss"><img className="plusicon" src={plus} alt="" /></div>
            </div>
          </div>
        </div>
        <div className="card">
          <img className="New-imgs" src={cards6} alt="" />
          <div className="card-content">
            <h2 className="card-title">Freight Forwarding</h2>
            <hr className="Services-header" />

            <p className="card-description">
            Arrange transportation of goods through various modes (air, sea, land) by coordinating with carriers, booking cargo, 
            negotiating rates, and managing freight documentation.Provide expertise in navigating customs procedures. 
            covering potential risks and damages that may occur during transportation
            Optimize the supply chain by streamlining processes, reducing lead times, .
            </p>
            <div className="card-footerblog">
              <div className="read">
                {" "}
                <a href="#">ReadMore</a>
              </div>
              <div className="pluss"><img className="plusicon" src={plus} alt="" /></div>
            </div>
          </div>
        </div>
        <div className="card">
          <img className="New-imgs" src={cards7} alt="" />
          <div className="card-content">
            <h2 className="card-title">Transportation</h2>
            <hr className="Services-header" />

            <p className="card-description">
            Handle the transportation process from origin to destination, optimizing routes, coordinating carriers, and ensuring on-time deliveries. 
            Utilize tracking and monitoring systems for real-time visibility.Provide insurance options to protect goods during transit, 
            tracking, and managing operations efficiently.
            covering potential risks and damages that may occur during transportation.
            </p>
            <div className="card-footerblog">
              <div className="read">
                {" "}
                <a href="#">ReadMore</a>
              </div>
              <div className="pluss"><img className="plusicon" src={plus} alt="" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutionservice;
