import React, { useEffect, useRef, useState } from "react";

import "../../Styles/Home/hpaccordion.css";
import { AiOutlineArrowRight } from "react-icons/ai";

function HProductAccordion(props) {
  const [active, setActive] = useState(false);
  const content = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    console.log("Height for ", props.title, ": ", height);
  }, [height]);
  useEffect(() => {
    console.log("Height for ", props.number, ": ", height);
  }, [height]);
  useEffect(() => {
    console.log("Height for ", props.desc, ": ", height);
  }, [height]);
  function toggleAccordion() {
    setActive(!active);
    setHeight(active ? "0px" : `${content.current.scrollHeight}px`);
  }

  return (
    <div className="accordion__section product__accordion">
      <div
        className={`accordion ${active ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        {" "}
        <p className="accordion__number">{props.number}</p>
        <div>
          {" "}
          <p className="accordion__title">{props.title}</p>
          <p className="accordion__desc">{props.desc}</p>
        </div>
        <span style={{ marginLeft: "20px" }}>
          {active ? (
            <AiOutlineArrowRight className="arow-icons" />
          ) : (
            <AiOutlineArrowRight className="arow-icons" />
          )}
        </span>
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className="accordion__content"
      >
        <div
          className="accordion__text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
}

export default HProductAccordion;
