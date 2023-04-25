import React from "react";
import BusinessMain from "./BusinessMain";
import HomeProduct from "../../Pages/Home/HomeProduct";
import HomeSoultion from "../../Pages/Home/HomeSloution";
import Footercontact from "../../components/FooterContact";
import Footer from "../../components/Footer";
import BusinessContact from "./BusinessContact";
const Business = () => {
  return (
    <div>
      <BusinessMain />
      <HomeProduct />
      <BusinessContact />
      <HomeSoultion />

      <Footercontact />

      <Footer />
    </div>
  );
};

export default Business;
