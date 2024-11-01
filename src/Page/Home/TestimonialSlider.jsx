import React, { useState } from "react";
import "../../Style/Home/TestimonialSlider.css";
// import testimonialsData from"../../Asset/testimonalicon-removebg-preview.png";

const testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    textt: "New work",
    images:"../image/testicon.png",
    text: "  I'm a small business owner, and this service has been agodsend! Viable is amazing, I'd absolutely recommend it toanyone work with Viable Trading.",
    image: "../image/testimonalicon-removebg-preview.png",
  },
  {
    id: 2,
    name: "Damn Tech",
    textt: "New work",
    images:"../image/testicon.png",
    text: "Their vast experience and knowledge of the global futures markets will save you time and money when it comes toexecution, rolls and research.",
    image:"../image/testimonalicon-removebg-preview.png",
  },
  {
    id: 3,
    name: "Mark Johnson",
    textt: "New work",
    images:"../image/testicon.png",
    text: "  Viable is very knowledgeable and readily available. I would recommend his services to anyone who wants to trade domestic and/or foreign futures markets.",
    image:"../image/testimonalicon-removebg-preview.png",
  },
];

const TestimonialSlider = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonialsData.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="testimonial-slider">
      <div className="testimonial">
        <img
          src={testimonialsData[currentTestimonial].image}
          alt={`Testimonial ${currentTestimonial}`}
        />
        
          <h3>{testimonialsData[currentTestimonial].name}</h3>
         <h6>{testimonialsData[currentTestimonial].textt}</h6>
         <img id="iconstest"
          src={testimonialsData[currentTestimonial].images}
          alt={`Testimonial ${currentTestimonial}`}
        />
        <p>{testimonialsData[currentTestimonial].text}</p>
       
      </div>
      <div className="controls">
        <button onClick={prevTestimonial}>&#8249;</button>
        <button onClick={nextTestimonial}>&#8250;</button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
