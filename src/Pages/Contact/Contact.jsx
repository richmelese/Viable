import React from "react";
import ContactMain from "./ContactMain";
import Footer from "../../components/Footer";
import ContactFAQ from "./ContactFAQ";
import Fade from "react-reveal/Fade";

const Contact = () => {
  return (
    <div>
      <Fade bottom duration={1500}>
        <ContactMain />
      </Fade>
      <Fade bottom duration={1500}>
        <ContactFAQ />
      </Fade>
      <Footer />
    </div>
  );
};

export default Contact;
