import React from "react";
import "../../Styles/Home/homeservice.css";
import Accordion from "./Accordion";
import ServiceImage from "../../assets/Services.png";
const HomeService = () => {
  return (
    <div>
      {/* ============================ */}
      <section id="BusinessActivities">
        <div className="Hservice__content">
          <div>
            <p>Business Activities</p>
          </div>
          <div>
            <hr />
          </div>
        </div>
        {/* Accordion */}
        <div className="HS__Accordion">
          <div>
            <h1>Services offered by Viable General Trading LLC</h1>
            <h6>
              Viable General Trading is a one-stop solution for all your trading
              needs. We provide a wide range of services to cater to the diverse
              needs of our clients. Our services include procurement of quality
              products, logistics and transportation, documentation, and customs
              clearance.
            </h6>
            <Accordion
              number="01"
              title="Import and Export"
              content="Viable import and export services UAE has helped many businesses and individuals maneuver the lengthy and complicated process of importing and exporting goods. Our import and export service UAE team aim to reduce paperwork, navigate new regulations, minimize shipping costs, and expedite transit with tailored services,"
            />
            <Accordion
              number="02"
              title="Stainless Steel Cleaning"
              content="Viable Stainless Steel Cleaning and Polishing services offer the best solution for cleaning, restoring, and preserving original stainless steel finish. Our quality of work speaks for itself. With us, it is easy to differentiate between pretreated and treated stainless steel."
            />
            <Accordion
              number="03"
              title="Outsourcing Services"
              content=" It’s easy to see how a simple procurement solution can improve and enhance business activities. A smooth journey, from product sourcing and invoice payments to supplier management. Procurement solutions can save on cost and enhance process efficiencies, which in turn, add value to the business
          </br>
"
            />
          </div>
          <div></div>
        </div>
        {/* Service Image */}
        <div className="Service__Image">
          {/* <img src={ServiceImage} alt="" /> */}
        </div>
        <div
          className="background__div"
          style={{
            width: "100%",
            height: "28rem",
            backgroundImage: `url(${ServiceImage})`,
          }}
        ></div>
      </section>
    </div>
  );
};

export default HomeService;
