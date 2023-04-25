import React from "react";
import "../../Styles/Home/homeproduct.css";
import Accordion from "./HProductAccordion";
const HomeProduct = () => {
  return (
    <div>
      {/* New Product */}
      <section id="product">
        <div className="HP__content">
          <div>
            <p>PRODUCT</p>
          </div>
          <div>
            <hr />
          </div>
        </div>
        {/* Seconde Content */}
        <div className="Hp__content__text">
          <div>
            <p>Viable Product Lines</p>
          </div>
          <div>
            <h6>
              Among other things, but not exclusively, the following are among
              the products and services that a viable general trading company in
              Dubai and the UAE specializes in:
            </h6>
          </div>
        </div>

        {/* Accodion */}
        <div>
          {" "}
          <div className="Hp__Accordion">
            <Accordion
              number="01"
              title="Construction and Building Material Products"
              desc="
              Leading importer and distributor of numerous construction products from regions throughout the world,"
              content="Leading importer and distributor of numerous construction products from regions throughout the world, including Asia, Europe, Africa, the Middle East, and the GCC, is Viable General Trade Company Dubai."
            />
            <Accordion
              number="02"
              title="Hospitality – Hotel Supply"
              desc="Every item you buy from Viable comes with the assurance that it will add credibility to your life."
              content="Every item you buy from Viable comes with the assurance that it will add credibility to your life. In an effort to surpass every hotelier's expectations, we meticulously choose top-notch hospitality goods. from fine linen and dinnerware to equipment and supplies."
            />
            <Accordion
              number="03"
              title="Foodstuff Products"
              desc="Viable General Trade started off humbly and developed into one of the most dependable food trading enterprises"
              content=" To ensure the safe free movement of goods throughout our processing facilities, we have made considerable progress in developing a HACCP compliant system. In all of our activities, we uphold stringent corporate ethics and adhere to global service standard          </br>
"
            />
          </div>
          <div></div>
        </div>
      </section>
    </div>
  );
};

export default HomeProduct;
