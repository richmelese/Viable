import React from "react";
import "../../Styles/Business/businessmain.css";
import BusinessBanner from "../../assets/bus_banner.png";
const BusinessMain = () => {
  return (
    <div>
      <section className="">
        <div className="Full__container__bus">
          <div className="business__container">
            <div className="first__coloumn">
              {" "}
              <p>Watch Our Intro </p>
              <h1>
                We Supply the Best Building Material and Construction Products.
              </h1>
              <h6>
                we have nurtured solid business relationships with our
                customers, partners, and suppliers. We strive to deliver urgent
                and reliable services, as well as consistently exceed goals and
                expectations. We Supply the Best Building Material and
                Construction Products.
              </h6>
              <button>
                <p>
                  <span>
                    <a className="bus__links" href="/contact">
                      Contact Us
                    </a>
                  </span>
                </p>
              </button>
            </div>
            <div className="bus__img">
              <img src={BusinessBanner} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessMain;
