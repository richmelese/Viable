import React from "react";
import "../../Styles/Services/servicesecond.css";
import iconsone from "../../assets/Icons-one.png";
import iconstwo from "../../assets/icons-two.png";
import iconsthree from "../../assets/icons-three.png";
import iconsfour from "../../assets/icons-four.png";
const ServiceSecond = () => {
  return (
    <div>
      <section>
        <div className="Services__Second">
          <div>
            {" "}
            <img className="services-second-images" src={iconsone} alt="" />
            <h6>Logistics Services</h6>
            <p>
              The team at Viable handles small and big logistic projects about
              iron pipes, machinery, oil refinery, motors, and containers by
              air, sea, and road.
            </p>
          </div>
          <div>
            {" "}
            <img className="services-second-images" src={iconstwo} alt="" />
            <h6>Land Freight Services</h6>
            <p>
              Viable Genera Trading offers an assortment of services in land
              freight. We boast credible LTL & FTL, import and export operating
              across the globe.
            </p>
          </div>
          <div>
            {" "}
            <img className="services-second-images" src={iconsthree} alt="" />
            <h6>Movers & Packers UAE</h6>
            <p>
              we help in provide door to door moving services. Our team will
              help with packing and pickup and ensure your goods remain in the
              best condition possible.
            </p>
          </div>
          <div>
            {" "}
            <img className="services-second-images" src={iconsfour} alt="" />
            <h6>Air Freight Services</h6>
            <p>
              We offer custom air freight services from UAE to Africa, Canada,
              Asia, Europe, the United States, Australia, and GCC countries.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceSecond;
