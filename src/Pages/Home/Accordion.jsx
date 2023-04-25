import React, { useEffect, useRef, useState } from "react";

import "../../Styles/Home/accordion.css";
import { AiOutlineArrowRight } from "react-icons/ai";

function Accordion(props) {
  const [active, setActive] = useState(false);
  const content = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    console.log("Height for ", props.title, ": ", height);
  }, [height]);
  useEffect(() => {
    console.log("Height for ", props.number, ": ", height);
  }, [height]);
  function toggleAccordion() {
    setActive(!active);
    setHeight(active ? "0px" : `${content.current.scrollHeight}px`);
  }

  return (
    <div className="accordion__section">
      <div
        className={`accordion ${active ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        {" "}
        <p className="accordion__nukber">{props.number}</p>
        <p className="accordion__title">{props.title}</p>
        <span style={{ marginLeft: "20px" }}>
          {active ? (
            <AiOutlineArrowRight className="arow-icons__one" />
          ) : (
            <AiOutlineArrowRight className="arow-icons__one" />
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

export default Accordion;
