import React from "react";
import Button from "@material-ui/core/Button";

// This component loads after successful submission of form

const Success = ({ formData, resetState }) => {
  const onSubmit = () => {
    resetState();
  };

  return (
    <div
      style={{
        marginTop: "30px",

        textAlign: "center",
      }}
    >
      <h1>Form Submitted Successfully</h1>
      <p>
        Thank you {formData.firstname + " " + formData.lastname}. We hope you
        like our service.
      </p>
      <Button variant="contained" color="primary" onClick={() => onSubmit()}>
        Submit Another Form
      </Button>
    </div>
  );
};

export default Success;
