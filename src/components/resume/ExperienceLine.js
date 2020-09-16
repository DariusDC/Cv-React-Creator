import React from "react";

const ExperienceLine = ({
  name,
  dateStart,
  dateEnd,
  position,
  description,
}) => {
  if (!name) return null;

  return (
    <div className="exp">
      <div className="head">
        <h5>{name}</h5>
        {dateStart && (
          <p>
            {dateStart} - {dateEnd}
          </p>
        )}
      </div>
      <div className="position">
        <p>{position}</p>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ExperienceLine;
