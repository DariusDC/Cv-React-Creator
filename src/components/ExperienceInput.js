import React from "react";
import Input from "./Input";
import Textarea from "./Textarea";

const ExperienceInput = ({ index, handleChangeExperience, experience }) => {
  return (
    <div>
      <Input
        placeholder="Company name"
        defaultValue={experience.title}
        onChange={handleChangeExperience("title", index)}
      />
      <Input
        placeholder="Job position"
        defaultValue={experience.position}
        onChange={handleChangeExperience("position", index)}
      />
      <Textarea
        placeholder="Job description"
        defaultValue={experience.description}
        onChange={handleChangeExperience("description", index)}
      />
      <Input
        placeholder="Start year"
        type="number"
        defaultValue={experience.dateStart}
        onChange={handleChangeExperience("dateStart", index)}
      />
      <Input
        placeholder="End Year"
        type="number"
        defaultValue={experience.dateEnd}
        onChange={handleChangeExperience("dateEnd", index)}
      />
    </div>
  );
};

export default ExperienceInput;
