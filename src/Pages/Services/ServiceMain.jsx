import React from "react";
import "../../Styles/Services/servicemain.css";
import ServiceBanner from "../../assets/serv__banner.png";
import ServiceMains from "../../assets/grid-one.png";
import Swiper from "./Swiper";
const ServiceMain = () => {
  return (
    <div>
      <section>
        <div
          style={{
            backgroundImage: `url(${ServiceBanner})`,
          }}
          className="main__image"
        >
          <h1>Our Solution</h1>{" "}
        </div>
        <div className="service__main">
          <div>
            <img src={ServiceMains} alt="" />
          </div>
          <div className="services__hr">
            <hr />
          </div>
          <div className="service__text">
            <h1>Procurement Outsourcing Services</h1>
            <p>
              It’s easy to see how a simple procurement solution can improve and
              enhance business activities.
            </p>
            <hr className="one__hr" />
          </div>
        </div>
        <div className="Sol__Accordion"></div>
      </section>
    </div>
  );
};

export default ServiceMain;
