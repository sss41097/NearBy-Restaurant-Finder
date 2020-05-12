import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// this shows button when city cannot be loaded by browser
const ShowButton = ({ setCity }) => {
  const [current, setCurrent] = useState("");

  return (
    <div>
      <h1 style={{ color: "black" }}>Your City Could not loaded By GPS:</h1>
      <TextField
        id="outlined-basic"
        size="small"
        value={current}
        onChange={(e) => {
          setCurrent(e.target.value);
        }}
        label="Enter City:"
        margin="normal"
        variant="outlined"
      />
      <br />
      <Button
        variant="contained"
        size="large"
        color="primary"
        onClick={() => {
          console.log(current);
          setCity((prev) => current.charAt(0).toUpperCase() + current.slice(1));
        }}
      >
        Search
      </Button>
    </div>
  );
};

export default ShowButton;
