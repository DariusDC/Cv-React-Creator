import React from "react";

const EducationLine = ({ name, dateStart, dateEnd, qualification }) => {
  if (!name) return null;

  return (
    <div className="edu">
      <div className="head">
        <h5 className="title">{name}</h5>
        <p className="year">
          {dateStart}-{dateEnd}
        </p>
      </div>
      <p className="qual">{qualification}</p>
    </div>
  );
};

export default EducationLine;
