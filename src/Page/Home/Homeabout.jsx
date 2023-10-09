import React from "react";
import "../../Style/Home/Homeabout.css";
import abtimag from "../../Asset/aboutimg.png";
import lines from "../../Asset/Line 16.png";
import iconss from "../../Asset/Group 9010.png";
import iconss2 from "../../Asset/Group 9009.png";
import iconss3 from "../../Asset/Group 9011.png";
import iconss4 from "../../Asset/Group 9012.png";
const Homeabout = () => {
  return (
    <section>
      <div className="grid_container">
        <div>
          <img className="abt-imgs" src={abtimag} alt="" />
        </div>
        <div className="about_paragraph">
          <h1>Why Choose Us</h1>
          <p>
            A well-known general trading company in Dubai, Viable General
            Trading specializes in supply and procurement and has strong
            financial capabilities. We work with a broad range of products from
            numerous industries, such as the metal and constraction markets.
          </p>
          <a href="#">Read More</a>
        </div>
        <div class="vl"></div>
        <div className="liness">
          <img className="imgs" src={lines} alt="" />
          <img className="iconimg2" src={iconss2} alt="" />
          <p>We are trusted </p>
          <img className="imgs" src={lines} alt="" />{" "}
          <img className="iconimg" src={iconss} alt="" />
          <p>The Best security </p>
          <img className="imgs" src={lines} alt="" />
          <img className="iconimg" src={iconss3} alt="" />
          <p>100% Guaratee</p>
          <img className="imgs" src={lines} alt="" />
          <img className="iconimg" src={iconss4} alt="" />
          <p>Quick Location</p>
        </div>
        {/* <hr
        style={{
          background: 'lime',
          color: 'lime',
         
        }}
      />
        <hr
        style={{
          background: '#00C5DF',
          color: '#00C5DF',
          alignItems:'center'
        }}
      />
        <hr
        style={{
          background: '#00C5DF',
          color: '#00C5DF',
        
        }}
      />
       <hr
        style={{
          background: '#00C5DF',
          color: '#00C5DF',
         
        }}
      /> */}
      </div>
    </section>
  );
};

export default Homeabout;
