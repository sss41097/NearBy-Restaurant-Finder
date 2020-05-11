import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

// This is the third form page to be loaded

const FormPage3 = ({
  formData,
  setFormData,
  errors,
  setError,
  handlePrev,
  handleNext,
}) => {
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    handleNext();
    console.log(formData);
  };

  return (
    <div
      style={{
        marginTop: "30px",
      }}
    >
      <form onSubmit={(e) => onSubmit(e)}>
        <h2>Did you like this Form ? </h2>
        <Checkbox
          name="checked"
          checked={formData.checked}
          onChange={(e) => onChange(e)}
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        Please Check if you Like it
        <br />
        <br />
        <Button
          variant="contained"
          color="secondary"
          onClick={(e) => handlePrev(e)}
        >
          Back
        </Button>
        &nbsp; &nbsp;
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          onClick={() => {}}
        >
          Next
        </Button>
      </form>
    </div>
  );
};

export default FormPage3;
