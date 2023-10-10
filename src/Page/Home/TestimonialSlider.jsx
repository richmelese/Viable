import React, { useState } from "react";
import "../../Style/Home/TestimonialSlider.css";

const testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    text: "  I'm a small business owner, and this service has been agodsend! Viable is amazing, I'd absolutely recommend it toanyone work with Viable Trading.",
    image: "",
  },
  {
    id: 2,
    name: "Damn Tech",
    text: "Their vast experience and knowledge of the global futures markets will save you time and money when it comes toexecution, rolls and research.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Mark Johnson",
    text: "  Viable is very knowledgeable and readily available. I would recommend his services to anyone who wants to trade domestic and/or foreign futures markets.",
    image: "https://via.placeholder.com/150",
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
        <p>{testimonialsData[currentTestimonial].text}</p>
        <h3>{testimonialsData[currentTestimonial].name}</h3>
      </div>
      <div className="controls">
        <button onClick={prevTestimonial}>&#8249;</button>
        <button onClick={nextTestimonial}>&#8250;</button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
