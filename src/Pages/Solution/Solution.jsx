import React from "react";
import SolutionMain from "./SolutionMain";
import SolutionPost from "./SolutionPost";
import Footer from "../../components/Footer";
import Fade from "react-reveal/Fade";

const Solution = () => {
  return (
    <div>
      <Fade bottom duration={1500}>
        <SolutionMain />
      </Fade>
      <Fade bottom duration={1500}>
        <SolutionPost />
      </Fade>
      <Footer />
    </div>
  );
};

export default Solution;
