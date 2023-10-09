import React from "react";
import aboutepic from "../../Asset/servicebanner.jpg";
import servicepic from "../../Asset/servicebanner.jpg";
// import "../../Style/Home/About/aboutbanner.css";
import "../../Style/About/aboutbanner.css";
const Aboutbanner = () => {
  return (
    <section>
      <img className="service-imgs" src={servicepic} alt="" />
      <div className="About-Us">
        <div>
          <h1>About Us</h1>
          {/* <button className="gl_button"><p>Our Services</p></button> */}
        </div>
        <div>
          {/* <img className="Grid-img" src={dashboard_img_1} alt="" /> */}
        </div>
      </div>
    </section>
  );
};

export default Aboutbanner;
