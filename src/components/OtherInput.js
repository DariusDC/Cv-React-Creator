import React from "react";
import Input from "./Input";
import Textarea from "./Textarea";

const ExperienceInput = ({ index, handleChangeOther, other }) => {
  return (
    <div>
      <Input
        placeholder="Title"
        defaultValue={other.title}
        onChange={handleChangeOther("title", index)}
      />
      <Textarea
        placeholder="Description"
        defaultValue={other.description}
        onChange={handleChangeOther("description", index)}
      />
    </div>
  );
};

export default ExperienceInput;
