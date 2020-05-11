import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

//This is the first form page to be loaded,

const FormPage1 = ({ formData, setFormData, errors, setError, handleNext }) => {
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regexp.test(formData.email)) {
      setError([...errors, "Email Not Valid"]);
      setTimeout(() => setError([]), 3000);
    } else {
      handleNext();
      console.log(formData);
    }
  };

  return (
    <div
      style={{
        marginTop: "30px",
      }}
    >
      <h1>Please Fill Personal Details</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <TextField
          name="firstname"
          label="First Name"
          margin="normal"
          variant="outlined"
          required
          value={formData.firstname}
          onChange={(e) => onChange(e)}
        />
        <br />
        <br />
        <TextField
          name="lastname"
          label="Last Name"
          margin="normal"
          variant="outlined"
          required
          value={formData.lastname}
          onChange={(e) => onChange(e)}
        />{" "}
        <br />
        <br />
        <TextField
          name="email"
          label="Email"
          margin="normal"
          variant="outlined"
          required
          value={formData.email}
          onChange={(e) => onChange(e)}
        />{" "}
        <br />
        <br />
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

export default FormPage1;
