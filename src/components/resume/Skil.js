import React from "react";

const Skil = ({ title, description }) => {
  return (
    <div className="skill">
      <h5 className="title">{title}</h5>
      <p className="description">{description}</p>
    </div>
  );
};

export default Skil;
