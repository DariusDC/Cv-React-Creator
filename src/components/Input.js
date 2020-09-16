import React from "react";
import "./Input.css";

const Input = ({ placeholder, ...otherProps }) => {
  return <input className="input" {...otherProps} placeholder={placeholder} />;
};

export default Input;
