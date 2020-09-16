import React, { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import Other from "./Other";
import Cofirm from "./Cofirm";
import "./UserForm.css";
import Resume from "../resume/Resume";

const UserForm = () => {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    job: "",
    resume: "",
    phone: "",
    github: "",
    linkedin: "",
    personalWebsite: "",
    facebook: "",
  });
  const [skills, setSkills] = useState([
    {
      title: "",
      description: "",
    },
  ]);
  const [education, setEducation] = useState([
    {
      name: "",
      qualification: "",
      dateStart: "",
      dateEnd: "",
    },
  ]);
  const [experience, setExperience] = useState([
    {
      title: "",
      position: "",
      description: "",
      dateStart: "",
      dateEnd: "",
    },
  ]);
  const [others, setOthers] = useState([
    {
      title: "",
      description: "",
    },
  ]);

  const handleAddSkill = () => {
    const newSkill = { title: "", description: "" };
    setSkills([...skills, newSkill]);
  };

  const handleAddExperience = () => {
    const newExperience = {
      title: "",
      position: "",
      description: "",
      dateStart: "",
      dateEnd: "",
    };
    setExperience([...experience, newExperience]);
  };

  const handleAddEducation = () => {
    const newEducation = {
      name: "",
      qualification: "",
      dateStart: "",
      dateEnd: "",
    };
    setEducation([...education, newEducation]);
  };

  const handleAddOther = () => {
    const newOther = {
      title: "",
      description: "",
    };
    setOthers([...others, newOther]);
  };

  const handleChange = (value) => (e) => {
    const currentValues = values;
    currentValues[`${value}`] = e.target.value;
    setValues(currentValues);
  };

  const handleChangeSkill = (type, index) => (e) => {
    const currentSkills = skills;
    currentSkills[index][`${type}`] = e.target.value;
    setSkills(currentSkills);
  };

  const handleChangeEducation = (type, index) => (e) => {
    const currentEducation = education;
    currentEducation[index][`${type}`] = e.target.value;
    setEducation(currentEducation);
  };

  const handleChangeExperience = (type, index) => (e) => {
    const currentExperience = experience;
    currentExperience[index][`${type}`] = e.target.value;
    setExperience(currentExperience);
  };

  const handleChangeOther = (type, index) => (e) => {
    const currentOther = others;
    currentOther[index][`${type}`] = e.target.value;
    setOthers(currentOther);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <>
      {step === 1 && (
        <PersonalDetails
          values={values}
          handleChange={handleChange}
          nextStep={nextStep}
        />
      )}
      {step === 2 && (
        <Skills
          handleAddSkill={handleAddSkill}
          skills={skills}
          nextStep={nextStep}
          prevStep={prevStep}
          handleChangeSkill={handleChangeSkill}
        />
      )}
      {step === 3 && (
        <Experience
          nextStep={nextStep}
          prevStep={prevStep}
          handleChangeExperience={handleChangeExperience}
          experience={experience}
          handleAddExperience={handleAddExperience}
        />
      )}
      {step === 4 && (
        <Education
          nextStep={nextStep}
          prevStep={prevStep}
          handleChangeEducation={handleChangeEducation}
          education={education}
          handleAddEducation={handleAddEducation}
        />
      )}
      {step === 5 && (
        <Other
          nextStep={nextStep}
          prevStep={prevStep}
          handleChangeOther={handleChangeOther}
          others={others}
          handleAddOther={handleAddOther}
        />
      )}
      {step === 6 && (
        <Cofirm
          values={values}
          education={education}
          experience={experience}
          others={others}
          skills={skills}
          prevStep={prevStep}
          nextStep={nextStep}
        />
      )}
      {step === 7 && (
        <Resume
          values={values}
          experience={experience}
          education={education}
          skills={skills}
          others={others}
        />
      )}
    </>
  );
};

export default UserForm;
