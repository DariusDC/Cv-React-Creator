import React from "react";
import Input from "./Input";

const ExperienceInput = ({ index, handleChangeEducation, education }) => {
  return (
    <div>
      <Input
        placeholder="College name"
        defaultValue={education.name}
        onChange={handleChangeEducation("name", index)}
      />
      <Input
        placeholder="Qualification"
        defaultValue={education.qualification}
        onChange={handleChangeEducation("qualification", index)}
      />
      <Input
        placeholder="Start year"
        type="number"
        defaultValue={education.dateStart}
        onChange={handleChangeEducation("dateStart", index)}
      />
      <Input
        placeholder="End Year"
        type="number"
        defaultValue={education.dateEnd}
        onChange={handleChangeEducation("dateEnd", index)}
      />
    </div>
  );
};

export default ExperienceInput;
