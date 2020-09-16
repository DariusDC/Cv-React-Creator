import React from "react";

import Button from "../Button";
import Frame from "./Frame";
import OtherInput from "../OtherInput";

const Other = ({
  nextStep,
  prevStep,
  handleAddOther,
  handleChangeOther,
  others,
}) => {
  return (
    <Frame>
      <h1 className="form-title">Add more relevant content on your resume</h1>
      <div className="form">
        {others.map((other, index) => (
          <>
            <OtherInput
              other={other}
              index={index}
              handleChangeOther={handleChangeOther}
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
      <Button title="Add new education" onClick={handleAddOther} />
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

export default Other;
