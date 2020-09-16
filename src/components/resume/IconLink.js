import React from "react";

const IconLink = ({ icon, text }) => {
  return (
    <div className="link">
      <i className={icon}></i>
      <a className="link-text" href="/">
        {text}
      </a>
    </div>
  );
};

export default IconLink;
