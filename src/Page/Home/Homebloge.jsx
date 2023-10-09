import React from "react";
import "../../Style/Home/Homebloge.css";
import Newbg from "../../Asset/blog1.png";
import cards2 from "../../Asset/blog2.png";
import cards4 from "../../Asset/blog3.png";
import small from "../../Asset/Group_9008-removebg-preview.png";
const Homebloge = (props) => {
  return (
    <div>
      <div className="grid_heading">
        {/* <div className='
            smallservice'><img className="" src={small} alt="" />our service</div> */}
        <div>
          <h1 className="serviceheading">Latest Blog Post</h1>
        </div>
        <div>
          <p className="paragrap">
            Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla
            facilisi. In sed pretium metus. Proin pretium id urna sit amet
            tincidunt..
          </p>
        </div>
      </div>
      <div className="grid_containerservice">
        {/* <h1>Our Service</h1> */}
        <div className="card">
          <img className="blog-imgs" src={Newbg} alt="" />
          <div className="card-content">
            <h2 className="card-title">Logistics Services</h2>
            <p className="card-description">
              Pellentesque vehicula eros neque, maximus mattis est sagittis
              Nulla facilisi. In sed pretium metus. Proin pretium id urna sit
              amet tincidunt..
            </p>
            <div className="card-footerblog">
              <div className="read">
                {" "}
                <a href="#">ReadMore</a>
              </div>
              {/* <div><span className="plus-icon">+</span></div> */}
            </div>
          </div>
        </div>
        <div className="card">
          <img className="blog-imgs" src={cards2} alt="" />
          <div className="card-content">
            <h2 className="card-title">Logistics Services</h2>
            <p className="card-description">
              Pellentesque vehicula eros neque, maximus mattis est sagittis
              Nulla facilisi. In sed pretium metus. Proin pretium id urna sit
              amet tincidunt..
            </p>
          </div>
          <div className="card-footerblog">
            <div className="read">
              {" "}
              <a href="#">ReadMore</a>
            </div>
          </div>
        </div>
        <div className="card">
          <img className="blog-imgs" src={cards4} alt="" />
          <div className="card-content">
            <h2 className="card-title">Logistics Services</h2>
            <p className="card-description">
              Pellentesque vehicula eros neque, maximus mattis est sagittis
              Nulla facilisi. In sed pretium metus. Proin pretium id urna sit
              amet tincidunt..
            </p>
          </div>
          <div className="card-footerblog">
            <div className="read">
              {" "}
              <a href="#">ReadMore</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homebloge;
