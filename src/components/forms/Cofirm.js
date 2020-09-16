import React from "react";
import Button from "../Button";
import Line from "../Line";
import Frame from "./Frame";
import "./Confirm.css";

const Cofirm = ({
  prevStep,
  skills,
  education,
  others,
  experience,
  values,
  nextStep,
}) => {
  const {
    firstName,
    lastName,
    email,
    job,
    resume,
    phone,
    github,
    linkedin,
    personalWebsite,
    facebook,
  } = values;

  return (
    <Frame>
      <h1 className="form-title">Confirm your information</h1>
      <small>Or go back for edit </small>
      {job && (
        <h3>
          Job position : <span style={{ fontWeight: "500" }}>{job}</span>
        </h3>
      )}
      <section>
        <h3>Personal Data</h3>
        <div className="details">
          <Line title="First Name" text={firstName} />
          <Line title="Last Name" text={lastName} />
          <Line title="Email" text={email} />
          <Line title="Resume" text={resume} />
          <Line title="Phone Number" text={phone} />
          <Line title="Github" text={github} />
          <Line title="Linkedin" text={linkedin} />
          <Line title="Facebook" text={facebook} />
          <Line title="Personal Website" text={personalWebsite} />
        </div>
      </section>
      <section>
        <h3>Skills</h3>
        <div className="details">
          {skills.map((skill) => (
            <Line br title={skill.title} text={skill.description} />
          ))}
        </div>
      </section>
      <section>
        <h3>Education</h3>
        <div className="details">
          {education.map((edu) => (
            <>
              <Line br title={edu.name} text={edu.qualification} />
              <Line text={`${edu.dateStart} - ${edu.dateEnd}`} />
            </>
          ))}
        </div>
      </section>
      <section>
        <h3>Experience</h3>
        <div className="details">
          {experience.map((exp) => (
            <>
              <Line br title={exp.title} text={exp.position} />
              <Line text={exp.description} />
              <Line text={`${exp.dateStart} - ${exp.dateEnd}`} />
            </>
          ))}
        </div>
      </section>
      <section>
        <h3>Others</h3>
        <div className="details">
          {others.map((other) => (
            <>
              <Line br title={other.title} text={other.description} />
            </>
          ))}
        </div>
      </section>
      <div className="buttons">
        <Button
          title="Back"
          color="#68b0ab"
          bgcolor="#fff"
          border="1px solid #68b0ab"
          onClick={prevStep}
        />
        <Button
          title="Confirm information and get the resume!"
          color="#fff"
          border="none"
          bgcolor="#68b0ab"
          onClick={nextStep}
        />
      </div>
    </Frame>
  );
};

export default Cofirm;
