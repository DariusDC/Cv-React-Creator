import Button from "../Button";
import React from "react";
import Frame from "./Frame";
import ExperienceInput from "../ExperienceInput.js";

const Experience = ({
  nextStep,
  prevStep,
  handleAddExperience,
  handleChangeExperience,
  experience,
}) => {
  return (
    <Frame>
      <h1 className="form-title">Add your Experience</h1>
      <div className="form">
        {experience.map((exp, index) => (
          <>
            <ExperienceInput
              experience={exp}
              handleChangeExperience={handleChangeExperience}
              index={index}
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
      <Button title="Add new experience" onClick={handleAddExperience} />
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

export default Experience;
