import React, { useState } from "react";
import "../../Style/About/aboutmain.css";
import aboutpic from "../../Asset/aboutimage.png";
import secondbutpic from "../../Asset/servicebanner.jpg";

const ContentDisplay = () => {
  const [activeButton, setActiveButton] = useState("button1");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const renderContent = () => {
    switch (activeButton) {
      case "button1":
        return (
          <div className="content">
            <h3>Campany Overview</h3>
            <img src={aboutpic} alt="Content Image" />
            <p>
              Viable import and export services UAE has helped many businesses
              and individuals maneuver the lengthy and complicated process of
              importing and exporting goods. Our import and export service UAE
              team aim to reduce paperwork, navigate new regulations, minimize
              shipping costs, and expedite transit with tailored services A
              well-known general trading company in Dubai, Viable General
              Trading specializes in supply and procurement and has strong
              financial capabilities. We work with a broad range of products
              from numerous industries, such as the metal and constraction
              markets. Apart from commodity trading, Viable general Trading in
              Dubai also offers bespoke other key services including procurement
              and supply, import & exportation Ecommerce, and logistic &
              shipping solutions to customers around the world.
            </p>
            <p>
              {" "}
              Our mission is to deliver high-quality products, streamline
              logistics, and provide efficient transportation services that
              empower businesses to scale and thrive. We are dedicated to
              fostering a culture of continuous improvement, innovation, and
              collaboration to achieve operational excellence and meet the
              evolving needs of our clients Viable general trading Logistics,
              and Transportation is a dynamic and innovative company dedicated
              to providing comprehensive solutions in the realms of product
              manufacturing, logistics, and transportation. Established on the
              foundation of reliability, efficiency, and customer-centricity,
            </p>
          </div>
        );
      case "button2":
        return (
          <div className="content">
            <h3>Aspiration & Vision</h3>
            <img src={secondbutpic} alt="Content Image" />
            <p>
              Our vision is to be a global leader in delivering seamless and
              sustainable solutions that enable businesses to optimize their
              supply chain processes and enhance customer satisfaction. We aim
              to leverage advanced technologies and environmentally conscious
              practices to create a positive impact on the industries we serve
              and the communities we operate in. Viable Genera Trading offers an
              assortment of services in land freight. We boast credible LTL &
              FTL, import and export operating across the globe. We offer custom
              air freight services from UAE to Africa, Canada, Asia, Europe, the
              United States, Australia, and GCC countries
            </p>
            <p>
              {" "}
              we help in provide door to door moving services. Our team will
              help with packing and pickup and ensure your goods remain in the
              best condition possible. It’s easy to see how a simple procurement
              solution can improve and enhance business activities. A smooth
              journey, from product sourcing and invoice payments to supplier
              management. Procurement solutions can save on cost and enhance
              process efficiencies, which in turn, add value to the business. At
              Viable we envision a world seamlessly connected through efficient
              logistics and transportation, where products reach their
              destinations swiftly, sustainably, and reliably. Our vision is to
              be a global leader in revolutionizing the way products are
              transported, optimizing supply chains, and contributing to a more
              sustainable future. In the dynamic world of global trade, a
              trading company's success hinges on its ability to seamlessly
              integrate products, logistics, and transportation. At the core of
              this success lies a powerful aspiration – a vision that propels us
              forward, pushing boundaries and redefining standards
            </p>
          </div>
        );
      case "button3":
        return (
          <div className="content">
            <h3>Strength</h3>
            <img src={secondbutpic} alt="Content Image" />
            <p>
              Strength Logistics & Transportation is a leading provider of
              comprehensive logistics and transportation solutions, dedicated to
              empowering businesses with reliable, efficient, and cost-effective
              services. Our commitment to excellence, innovation, and
              sustainability drives our operations, ensuring seamless product
              delivery and customer satisfaction.ight services from UAE to
              Africa, Canada, Asia, Europe, the United States, Australia, and
              GCC countries we strive to exceed expectations through our
              commitment to excellence. Viable Stainless Steel Cleaning and
              Polishing services offer the best solution for cleaning,
              restoring, and preserving original stainless steel finish. Our
              quality of work speaks for itself. With us, it is easy to
              differentiate between pretreated and treated stainless steel
            </p>
            <p>
              {" "}
              Having a well-developed and modern infrastructure, including
              warehouses, distribution centers, and transportation facilities,
              ensures smooth logistics operations and timely deliveries.
              Implement systems that offer real-time tracking of shipments,
              providing customers with visibility into their orders and enabling
              proactive issue resolution. We aim to redefine the traditional
              concepts of logistics and transportation by leveraging
              cutting-edge technologies, fostering innovation, and cultivating a
              culture of continuous improvement. Through strategic partnerships
              and a commitment to excellence, we strive to exceed customer
              expectations and empower businesses to flourish in an
              interconnected world Viable Stainless Steel Cleaning and Polishing
              services offer the best solution for cleaning, restoring, and
              preserving original stainless steel finish. Our quality of work
              speaks for itself. With us, it is easy to differentiate between
              pretreated and treated stainless steel
            </p>
          </div>
        );
      case "button4":
        return (
          <div className="content">
            <h3>Quality & Policy</h3>
            <img src={secondbutpic} alt="Content Image" />
            <p>
              Maintain complete and accurate records of product origins,
              manufacturing processes, and transportation details to ensure
              traceability and transparency. All products traded and transported
              must meet established quality standards to ensure customer
              satisfaction and compliance with relevant regulations. Maintain
              complete and accurate records of product origins, manufacturing
              processes, and transportation details to ensure traceability and
              transparency. Define clear shipping and delivery policies,
              including delivery times, shipping charges, and return or exchange
              procedures to manage customer expectations.
            </p>
            <p>
              {" "}
              Having a well-developed and modern infrastructure, including
              warehouses, distribution centers, and transportation facilities,
              ensures smooth logistics operations and timely deliveries.
              Implement systems that offer real-time tracking of shipments,
              providing customers with visibility into their orders and enabling
              proactive issue resolution. We aim to redefine the traditional
              concepts of logistics and transportation by leveraging
              cutting-edge technologies, fostering innovation, and cultivating a
              culture of continuous improvement. Through strategic partnerships
              and a commitment to excellence, we strive to exceed customer
              expectations and empower businesses to flourish in an
              interconnected world Viable Stainless Steel Cleaning and Polishing
              services offer the best solution for cleaning, restoring, and
              preserving original stainless steel finish. Our quality of work
              speaks for itself. With us, it is easy to differentiate between
              pretreated and treated stainless steel
            </p>
          </div>
        );

      // Add more cases for additional buttons as needed

      default:
        return null;
    }
  };

  return (
    <div className="grid_newbutton">
      <div className="buttons">
        <button
          className="dropbutton"
          onClick={() => handleButtonClick("button1")}
        >
          <p>Campany Overview</p>
        </button>
        <button
          className="dropbutton"
          onClick={() => handleButtonClick("button2")}
        >
          <p>Aspiration & Vision</p>
        </button>
        {/* Add more buttons for additional options as needed */}
        <button
          className="dropbutton"
          onClick={() => handleButtonClick("button3")}
        >
          <p>Strength</p>
        </button>
        <button
          className="dropbutton"
          onClick={() => handleButtonClick("button4")}
        >
          <p>Quality & Policy </p>
        </button>
      </div>
      <div className="content">{renderContent()}</div>
    </div>
  );
};

export default ContentDisplay;
