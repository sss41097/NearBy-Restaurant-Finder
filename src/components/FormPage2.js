import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// This is the second form component to be loaded

const FormPage2 = ({
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
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let err = [];
    if (
      formData.city === "" ||
      formData.state === "" ||
      formData.pincode.length < 6
    ) {
      if (formData.city === "") {
        err = [...err, "City is Required."];
      }

      if (formData.pincode.length < 6) {
        err = [...err, "Pincode length must be 6."];
      }

      if (formData.state === "") {
        err = [...err, "State is Required."];
      }
      console.log(err);
      setError([...errors, ...err]);
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
      <h1>Please Fill Your HomeTown Information</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <InputLabel id="demo-simple-select-label">City* </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          name="city"
          value={formData.city}
          InputProps={{
            inputProps: {
              max: 6,
              min: 6,
            },
          }}
          required
          onInput={(e) => {
            e.target.value = Math.max(0, parseInt(e.target.value))
              .toString()
              .slice(0, 6);
          }}
          onChange={(e) => onChange(e)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Agra"}>Agra</MenuItem>
          <MenuItem value={"Gwalior"}>Gwalior</MenuItem>
          <MenuItem value={"bangalore"}>Bangalore</MenuItem>
        </Select>
        <br />
        <br />
        <InputLabel id="demo-simple-select-label">State* </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          name="state"
          value={formData.state}
          required
          onChange={(e) => onChange(e)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"U.P."}>U.P.</MenuItem>
          <MenuItem value={"M.P."}>M.P.</MenuItem>
          <MenuItem value={"Telangana"}>Telangana</MenuItem>
        </Select>
        <br />
        <br />
        <TextField
          label="Pin Code"
          name="pincode"
          type="number"
          onInput={(e) => {
            e.target.value = Math.max(0, parseInt(e.target.value))
              .toString()
              .slice(0, 6);
          }}
          min={0}
          required
          value={formData.pincode}
          onChange={(e) => onChange(e)}
        />
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
        {/* <input
          className="w3-btn w3-blue-grey"
          type="submi
          value="Next"t"
        ></input> */}
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

export default FormPage2;
