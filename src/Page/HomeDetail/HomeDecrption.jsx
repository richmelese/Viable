import React from "react";
import IconOne from "../../images/desc-icon (1).png";
import IconTwo from "../../images/desc-icon (2).png";
import IconThree from "../../images/desc-icon (3).png";
import IconFour from "../../images/desc-icon (4).png";
const HomeDecrption = () => {
  return (
    <div>
      <div className="HD__desc">
        <div>
          <h1>Description</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Pulvinar ultricies et at non
            pharetra urna rhoncus congue massa. Ac pretium maecenas praesent
            enim pharetra vitae arcu. Vitae cursus varius non urna phasellus
            ornare phasellus. Viverra adipiscing sodales id sem fermentum
            rhoncus gravida nam dapibus. Arcu iaculis ante at quis felis in
            ipsum. Consequat nunc felis etiam dignissim netus. Duis facilisis
            venenatis sed fames a vitae. Curabitur quis accumsan non at.
          </p>
          {/*  */}
          <div className="Color-bg">
            <div className="first"></div>
            <div style={{ backgroundColor: "#00C5DF" }} className="second">
              <p>
                Lorem ipsum dolor sit amet consectetur. Rhoncus tincidunt leo
                fames dolor iaculis aliquam vel turpis suscipit. Pretium lacus
                ut non vitae mauris nec. Vulputate a eget netus at.
              </p>
            </div>
          </div>
          <h4 className="Haeder-four">
            Lorem ipsum dolor sit amet consectetur. Ut tincidunt tristique
            feugiat arcu natoque fermentum accumsan. Nullam imperdiet massa
            interdum pellentesque laoreet. Quis volutpat arcu lorem feugiat.
            Fringilla euismod mauris augue nulla nec egestas. Leo sagittis
            tempus molestie.
          </h4>
        </div>
        <div></div>
      </div>
      {/*  */}
      <div className="Second__Descrption">
        <div className="Time">
          <div className="Detail">
            <div>
              <img src={IconThree} alt="" />
            </div>
            <div>
              <h1>24/7 Availability</h1>
              <p>Lorem ipsum dolor sit amet consectetur. Sed.</p>
            </div>
            {/*  */}
            <div className="new-con-img">
              <img src={IconTwo} alt="" />
            </div>
            <div className="new-con">
              <h1>Process Technology</h1>
              <p>Lorem ipsum dolor sit amet consectetur. Sed.</p>
            </div>
            {/*  */}
          </div>
          <div className="Detail">
            <div>
              <img src={IconOne} alt="" />
            </div>
            <div>
              <h1>Affordable Price</h1>
              <p>Lorem ipsum dolor sit amet consectetur. Sed.</p>
            </div>
            {/*  */}
            <div className="new-con-img">
              <img src={IconFour} alt="" />
            </div>
            <div className="new-con">
              <h1>Free Estimation</h1>
              <p>Lorem ipsum dolor sit amet consectetur. Sed.</p>
            </div>
            {/*  */}
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default HomeDecrption;
