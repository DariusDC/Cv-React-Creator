import React from "react";
import Frame from "./Frame";
import Button from "../Button";
import SkillInput from "../SkillInput";

const Skills = ({
  nextStep,
  prevStep,
  handleAddSkill,
  skills,
  handleChangeSkill,
}) => {
  return (
    <Frame>
      <h1 className="form-title">Your Skills</h1>
      <div>
        {skills.map((skill, index) => (
          <SkillInput
            skill={skill}
            index={index}
            key={index}
            handleChangeSkill={handleChangeSkill}
          />
        ))}
        <Button title="Add new skill" onClick={handleAddSkill} />
      </div>
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

export default Skills;
