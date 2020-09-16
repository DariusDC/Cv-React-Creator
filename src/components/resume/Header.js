import React from "react";

const Header = ({ firstName, lastName, job }) => {
  return (
    <div className="header-info">
      <h4>
        {firstName} {lastName}
      </h4>
      <h6>{job}</h6>
    </div>
  );
};

export default Header;
