import React from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

import EducationLine from "./EducationLine";
import ExperienceLine from "./ExperienceLine";
import Header from "./Header";
import IconLink from "./IconLink";
import "./Resume.css";
import Skil from "./Skil";
import Button from "../Button";

const Resume = ({ values, education, experience, skills, others }) => {
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

  const printDocument = () => {
    const input = document.getElementById("resume");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", -2, 0, pdfWidth, pdfHeight);
      pdf.save("resume.pdf");
    });
  };

  return (
    <div className="container">
      <Button
        title="Print your resume"
        bgcolor="dodgerblue"
        color="#fff"
        onClick={printDocument}
      />
      <div className="resume" id={"resume"}>
        <div className="header">
          <Header firstName={firstName} lastName={lastName} job={job} />
          <div className="links">
            {personalWebsite && (
              <IconLink icon="fas fa-globe" text={personalWebsite} />
            )}
            {github && <IconLink icon="fab fa-github" text={github} />}
            {linkedin && <IconLink icon="fab fa-linkedin" text={linkedin} />}
            {facebook && <IconLink icon="fab fa-facebook" text={facebook} />}
            {phone && <IconLink icon="fas fa-phone" text={phone} />}
            {email && <IconLink icon="fas fa-envelope" text={email} />}
          </div>
        </div>
        <hr />
        <div className="profile">
          <div className="left">
            <p>Profile</p>
          </div>
          <div className="right">
            <p>{resume}</p>
          </div>
        </div>
        <hr />
        {skills[0].title && (
          <>
            {" "}
            <div className="profile">
              <div className="left">
                <p>Skills</p>
              </div>
              <div className="right cols">
                {skills.map((skill) => (
                  <Skil title={skill.title} description={skill.description} />
                ))}
              </div>
            </div>
            <hr />{" "}
          </>
        )}
        {experience[0].title && (
          <>
            {" "}
            <div className="profile">
              <div className="left">
                <p>Experience</p>
              </div>
              <div className="right">
                {experience.map((exp) => (
                  <ExperienceLine
                    name={exp.title}
                    position={exp.position}
                    description={exp.description}
                    dateStart={exp.dateStart}
                    dateEnd={exp.dateEnd}
                  />
                ))}
              </div>
            </div>
            <hr />{" "}
          </>
        )}
        {education[0].name && (
          <>
            <div className="profile">
              <div className="left">
                <p>Education</p>
              </div>
              <div className="right">
                {education.map((edu) => (
                  <EducationLine
                    name={edu.name}
                    dateStart={edu.dateStart}
                    dateEnd={edu.dateEnd}
                    qualification={edu.qualification}
                  />
                ))}
              </div>
            </div>
            <hr />
          </>
        )}

        {others[0].title && (
          <>
            <div className="profile">
              <div className="left">
                <p>Others</p>
              </div>
              <div className="right">
                {others.map((other) => (
                  <ExperienceLine
                    name={other.title}
                    description={other.description}
                  />
                ))}
              </div>
            </div>
            <hr />{" "}
          </>
        )}
      </div>
    </div>
  );
};

export default Resume;
