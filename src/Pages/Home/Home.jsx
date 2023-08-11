import React from "react";
import "../../Styles/Home/home.css";
import HomeAbout from "./HomeAbout";
import HomeMain from "./HomeMain";
import HomeService from "./HomeService";
import HomeProduct from "./HomeProduct";
import HomeSloution from "./HomeSloution";
import FooterContact from "../../components/FooterContact";
import Footer from "../../components/Footer";
import Fade from "react-reveal/Fade";

const Home = () => {
  return (
    <div>
      <Fade bottom duration={1500}>
        <HomeMain />
      </Fade>
      <Fade bottom duration={2500}>
        <HomeAbout />
      </Fade>
      <Fade bottom duration={1500}>
        <HomeService />
      </Fade>
      <Fade bottom duration={1500}>
        <HomeProduct />
      </Fade>
      <HomeSloution />
      <Fade bottom duration={1500}>
        <FooterContact />
      </Fade>{" "}
      <Footer />
    </div>
  );
};

export default Home;
