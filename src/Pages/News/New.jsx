import React from "react";
import NewsMain from "./NewsMain";
import NewsPost from "./NewsPost";
import Footer from "../../components/Footer";
import Fade from "react-reveal/Fade";

const New = () => {
  return (
    <div>
      <Fade bottom duration={1500}>
        <NewsMain />
      </Fade>
      <Fade bottom duration={1500}>
        <NewsPost />
      </Fade>
      <Footer />
    </div>
  );
};

export default New;
