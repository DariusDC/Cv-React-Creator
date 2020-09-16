import React from "react";

const Line = ({ title, text, br }) => {
  if (!text) return null;
  return (
    <p>
      <strong>{title}</strong> {br && <br />} {text}
    </p>
  );
};

export default Line;
