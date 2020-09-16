import React from "react";
import "./Frame.css";

const Frame = ({ children }) => {
  return (
    <div className="center">
      <div className="frame">{children}</div>
    </div>
  );
};

export default Frame;
