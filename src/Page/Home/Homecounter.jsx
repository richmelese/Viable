import React from "react";
import "../../Style/Home/Homecounter.css";
import counter1 from "../../Asset/1 (1).png";
import counter2 from "../../Asset/2.png";
import counter3 from "../../Asset/33.png";
import counter4 from "../../Asset/44.png";

// import Fetch from "./Fetch";

const Homecounter = () => {
  return (
    <section>
      <div className="grid_counter">
        <div>
          <img className="counterimage" src={counter1} alt="" />
        </div>
        <div>
          <img className="counterimage" src={counter2} alt="" />
        </div>
        <div>
          <img className="counterimage" src={counter3} alt="" />
        </div>
        <div>
          <img className="counterimage" src={counter4} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Homecounter;
