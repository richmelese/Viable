import React, { useState } from "react";
import "../../Style/About/aboutmain.css";
import aboutpic from "../../Asset/aboutimage.png";
import secondbutpic from "../../Asset/servicebanner.jpg";

const ContentDisplay = () => {
  const [activeButton, setActiveButton] = useState("button1");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const renderContent = () => {
    switch (activeButton) {
      case "button1":
        return (
          <div className="content">
            <h3>Campany Overview</h3>
            <img src={aboutpic} alt="Content Image" />
            <p>
              Pellentesque vehicula eros neque, maximus mattiProin pretium id
              urna sit amet tincidunt.Pellentesque vehicula eros neque, maximus
              mattis est sagittis Nulla facilisi. In sed pretium metus. Proin
              pretium id urna sit amet tincidunt.Pellentesque vehicula eros
              neque, maximus mattis est sagittis Nulla facilisi. In sed pretium
              metus. Proin pretium id urna sit amet tincidunt.Pellentesque
              vehicula eros neque, maximus mattis est sagittis Nulla facilisi.
              In sed pretium metus. Proin pretium id urna sit amet
              tincidunt.Pellentesque vehicula eros neque, maximus mattis est
              sagittis Nulla facilisi. In sed pretium metus. Proin pretium id
              urna sit amet tincidunt.Pellentesque vehicula eros neque, maximus
              mattis est sagittis Nulla facilisi. In sed pretium metus.
            </p>
            <p>
              {" "}
              maximus mattis est.Pellentesque vehicula eros neque, maximus
              mattis est sagittis Nulla facilisi. In sed pretium metus. Proin
              pretium id urna sit amet tincidunt.Pellentesque vehicula eros
              neque, maximus mattis est sagittis Nulla facilisi. In sed pretium
              metus. Proin pretium id urna sit amet tincidunt.Pellentesque
              vehicula eros neque, maximus mattis est sagittis Nulla facilisi.
              In sed pretium metus. Proin pretium id urna sit amet
              tincidunt.Pellentesque vehicula eros neque, maximus mattis est
              sagittis Nulla facilisi. In sed pretium metus. Proin pretium id
              urna sit amet tincidunt.Pellentesque vehicula eros neque, maximus
              mattis est sagittis Nulla facilisi. In sed pretium metus. Proin
              pretium id urna sit amet tincidunt.Pellentesque vehicula eros
              neque, maximus mattis est sagittis Nulla facilisi. In sed pretium
              metus. Proin pretium id urna sit amet tincidunt.Pellentesque
              vehicula eros neque, maximus mattis est sagittis Nulla facilisi.
              In sed pretium metus. .
            </p>
          </div>
        );
      case "button2":
        return (
          <div className="content">
            <h3>Aspiration & Vision</h3>
            <img src={secondbutpic} alt="Content Image" />
            <p>
              Pellentesque vehicula eros neque, maximus mattis est sagittis
              Nulla facilisi. In sed pretium metus. Proin pretium id urna sit
              amet tincidunt.Pellentesque vehicula eros neque, maximus mattis
              est sagittis Nulla facilisi. In sed pretium metus. Proin pretium
              id urna sit amet tincidunt.Pellentesque vehicula eros neque,
              maximus mattis est sagittis Nulla facilisi. In sed pretium metus.
              Proin pretium id urna sit amet tincidunt.Pellentesque vehicula
              eros neque, maximus mattis est sagittis Nulla facilisi. In sed
              pretium metus. Proin pretium id urna sit amet
              tincidunt.Pellentesque vehicula eros neque, maximus mattis est
              sagittis Nulla facilisi. In sed pretium metus. Proin pretium id
              urna sit amet tincidunt.Pellentesque vehicula eros neque, maximus
              mattis est sagittis Nulla facilisi. In sed pretium metus. Proin
              pretium id urna sit amet tincidunt.Pellentesque vehicula eros
              neque, maximus mattis est sagittis Nulla facilisi. In sed pretium
              metus. Proin pretium id urna sit amet tincidunt.Pellentesque
              vehicula eros neque, maximus mattis est sagittis Nulla facilisi.
              In sed pretium metus. Proin pretium id urna sit amet tincidunt.
            </p>
            <p>
              {" "}
              . Proin pretium id urna sit amet tincidunt.Pellentesque vehicula
              eros neque, maximus mattis est sagittis Nulla facilisi. In sed
              pretium metus. Proin pretium id urna sit amet
              tincidunt.Pellentesque vehicula eros neque, maximus mattis est
              sagittis Nulla facilisi. In sed pretium metus. Proin pretium id
              urna sit amet tincidunt.Pellentesque vehicula eros neque, maximus
              mattis est sagittis Nulla facilisi. In sed pretium metus. Proin
              pretium id urna sit amet tincidunt.Pellentesque vehicula eros
              neque, maximus mattis est sagittis Nulla facilisi. In sed pretium
              metus. Proin pretium id urna sit amet tincidunt.Pellentesque
              vehicula eros neque, maximus mattis est sagittis Nulla facilisi.
              In sed pretium metus. Proin pretium id urna sit amet
              tincidunt.Pellentesque vehicula eros neque, maximus mattis est
              sagittis Nulla facilisi. In sed pretium metus. Proin pretium id
              urna sit amet tincidunt.Pellentesque vehicula eros neque, maximus
              mattis est sagittis Nulla facilisi. In sed pretium metus. Proin
              pretium id urna sit amet tincidunt.
            </p>
          </div>
        );
      // Add more cases for additional buttons as needed

      default:
        return null;
    }
  };

  return (
    <div className="grid_newbutton">
      <div className="buttons">
        <button
          className="dropbutton"
          onClick={() => handleButtonClick("button1")}
        >
          <p>Campany Overview</p>
        </button>
        <button
          className="dropbutton"
          onClick={() => handleButtonClick("button2")}
        >
          <p>Aspiration & Vision</p>
        </button>
        {/* Add more buttons for additional options as needed */}
        <button
          className="dropbutton"
          onClick={() => handleButtonClick("button2")}
        >
          <p>Strength</p>
        </button>
        <button
          className="dropbutton"
          onClick={() => handleButtonClick("button2")}
        >
          <p>Quality & Policy </p>
        </button>
      </div>
      <div className="content">{renderContent()}</div>
    </div>
  );
};

export default ContentDisplay;
