import React from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import "./SkillInput.css";

const SkillInput = ({ index, handleChangeSkill, skill }) => {
  return (
    <div className="skill">
      <Input
        placeholder="Skill name"
        defaultValue={skill.title}
        style={{ width: "90%", margin: "auto", flex: "1" }}
        onChange={handleChangeSkill("title", index)}
      />
      <Textarea
        defaultValue={skill.description}
        placeholder="Skill description"
        onChange={handleChangeSkill("description", index)}
      />
    </div>
  );
};

export default SkillInput;
