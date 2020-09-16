import React from "react";

import Frame from "./Frame";
import Button from "../Button";
import EducationInput from "../EducationInput";

const Education = ({
  nextStep,
  prevStep,
  handleAddEducation,
  handleChangeEducation,
  education,
}) => {
  return (
    <Frame>
      <h1 className="form-title">Add your education</h1>
      <div className="form">
        {education.map((education, index) => (
          <>
            <EducationInput
              education={education}
              index={index}
              handleChangeEducation={handleChangeEducation}
            />
            <hr
              style={{
                width: "30%",
                height: "1px",
                color: "silver",
                backgroundColor: "silver",
                border: "0",
                marginBottom: "1rem",
              }}
            />
          </>
        ))}
      </div>
      <Button title="Add new education" onClick={handleAddEducation} />
      <div className="buttons">
        <Button
          title="Back"
          color="#68b0ab"
          bgcolor="#fff"
          border="1px solid #68b0ab"
          onClick={prevStep}
        />
        <Button
          title="Continue"
          color="#fff"
          border="none"
          bgcolor="#68b0ab"
          onClick={nextStep}
        />
      </div>
    </Frame>
  );
};

export default Education;
