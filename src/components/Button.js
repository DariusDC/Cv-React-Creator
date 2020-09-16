import React from "react";
import "./Button.css";

const Buttons = ({ title, color, bgcolor, border, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ color: color, backgroundColor: bgcolor, border: border }}
    >
      {title}
    </button>
  );
};

export default Buttons;
