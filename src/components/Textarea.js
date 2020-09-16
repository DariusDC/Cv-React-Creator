import React from "react";
import "./Textarea.css";

const Textarea = ({ placeholder, ...otherProps }) => {
  return <textarea placeholder={placeholder} {...otherProps} rows={5} />;
};

export default Textarea;
