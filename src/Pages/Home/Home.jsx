import React from "react";
import "../../Styles/Home/home.css";
import HomeAbout from "./HomeAbout";
import HomeMain from "./HomeMain";
import HomeService from "./HomeService";
import HomeProduct from "./HomeProduct";
import HomeSloution from "./HomeSloution";
import FooterContact from "../../components/FooterContact";
import Footer from "../../components/Footer";
const Home = () => {
  return (
    <div>
      <HomeMain />
      <HomeAbout />
      <HomeService />
      <HomeProduct />
      <HomeSloution />
      <FooterContact /> <Footer />
    </div>
  );
};

export default Home;
