import React from "react";
import BusinessMain from "./BusinessMain";
import HomeProduct from "../../Pages/Home/HomeProduct";
import HomeSoultion from "../../Pages/Home/HomeSloution";
import Footercontact from "../../components/FooterContact";
import Footer from "../../components/Footer";
import BusinessContact from "./BusinessContact";
import Fade from "react-reveal/Fade";

const Business = () => {
  return (
    <div>
      <Fade bottom duration={1500}>
        <BusinessMain />
      </Fade>
      <Fade bottom duration={1500}>
        <HomeProduct />
      </Fade>
      <Fade bottom duration={1500}>
        <BusinessContact />
      </Fade>
      <Fade bottom duration={1500}>
        <HomeSoultion />
      </Fade>
      <Fade bottom duration={1500}>
        <Footercontact />
      </Fade>

      <Footer />
    </div>
  );
};

export default Business;
