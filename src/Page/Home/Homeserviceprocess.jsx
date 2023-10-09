import React from "react";
import "../../Style/Home/Homserviceprocess.css";
// import Homserviceprocess from "../../style/Home/Homserviceprocess.css";
import circles3 from "../../Asset/Group 9016.png";
import circles1 from "../../Asset/Group 9014 (1).png";
import circles2 from "../../Asset/Group 9015.png";
import circles from "../../Asset/Group 9013.png";

import linesproces from "../../Asset/Line 16.png";
import icon from "../../Asset/grommet-icons_select.png";
const Homeserviceprocess = () => {
  return (
    <section>
      <div className="grid_process">
        {/* <div className="process"><h3>Our Services Process</h3></div> */}
        <div className="process">
          <h3>Our Services Process</h3>
          <p>
            Viable General Trading is a one-stop solution for all your trading
            needs. We provide a wide range of services to cater to the diverse
            needs of our clients. Our services include procurement of quality
            products, logistics and transportation, documentation, and customs
            clearance.
          </p>
        </div>
        <div className="circles">
          <img className="circlesimgs" src={circles3} alt="" />{" "}
          <img className="lineimgs" src={linesproces} alt="" />{" "}
          <img className="circlesimgs" src={circles2} alt="" />{" "}
          <img className="lineimgs" src={linesproces} alt="" />{" "}
          <img className="circlesimgs" src={circles1} alt="" />{" "}
          <img className="lineimgs" src={linesproces} alt="" />{" "}
          <img className="circlesimgs" src={circles} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Homeserviceprocess;
