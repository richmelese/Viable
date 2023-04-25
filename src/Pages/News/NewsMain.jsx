import React from "react";
import "../../Styles/news/newsmain.css";
import NewsBanner from "../../assets/news-banner.png";
const NewsMain = () => {
  return (
    <div>
      <section>
        <div className="News__container">
          <div></div>
          <div>
            {" "}
            <p>Read our latest News</p>
            <h6>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor.
            </h6>
          </div>
          <div></div>
        </div>
        {/* ==============main content============================= */}
        <div className="NewsMain__content">
          <div>
            <p>Trending Post</p>{" "}
            <h2>Lorem ipsum dolor sit amet consectetur.</h2>
            <h6>
              Over the past few months, we’ve added several new features to SaaS
              Invoicing to help any business get paid faster and streamline
              their collection workflows.
            </h6>
            <h5>Luke Matthews l November 8, 2021</h5>
          </div>
          <div>
            <img src={NewsBanner} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsMain;
