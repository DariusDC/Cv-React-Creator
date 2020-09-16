import Input from "../Input";
import Button from "../Button";
import Textarea from "../Textarea";
import React from "react";
import Frame from "./Frame";

const PersonalDetails = ({ nextStep, handleChange, values }) => {
  return (
    <div>
      <h1 style={{ marginTop: "3rem" }}>
        Build your own cv in just 5 easy steps!
      </h1>
      <Frame>
        <h1 className="form-title">Personal Details</h1>
        <div className="form">
          <Input
            defaultValue={values.firstName}
            placeholder="First Name"
            onChange={handleChange("firstName")}
          />
          <Input placeholder="Last Name" onChange={handleChange("lastName")} />
          <Input
            defaultValue={values.lastName}
            placeholder="Email"
            type="email"
            onChange={handleChange("email")}
          />

          <Input
            defaultValue={values.job}
            placeholder="Position"
            onChange={handleChange("job")}
          />
          <Input
            defaultValue={values.phone}
            placeholder="Phone Number"
            onChange={handleChange("phone")}
          />
          <Textarea
            defaultValue={values.resume}
            placeholder="Short resume"
            onChange={handleChange("resume")}
          />
        </div>
        <h1 className="form-title">Links</h1>
        <div className="form">
          <Input
            defaultValue={values.github}
            placeholder="Github link"
            onChange={handleChange("github")}
          />
          <Input
            defaultValue={values.linkedin}
            placeholder="LinkedIn"
            onChange={handleChange("linkedin")}
          />
          <Input
            defaultValue={values.facebook}
            placeholder="Facebook Link"
            onChange={handleChange("facebook")}
          />
          <Input
            defaultValue={values.personalWebsite}
            placeholder="Personal Website"
            onChange={handleChange("personalWebsite")}
          />
        </div>
        <div className="buttons">
          <Button
            title="Continue"
            color="#fff"
            border="none"
            bgcolor="#68b0ab"
            onClick={nextStep}
          />
        </div>
      </Frame>
    </div>
  );
};

export default PersonalDetails;
