import React, { Fragment } from "react";

// This is an alert function which is triggered whenever validation goes wrong
const alert = ({ errors }) => {
  return (
    <Fragment>
      {errors != null &&
        errors.length > 0 &&
        errors.map((error) => (
          <div key={Math.random()}>
            <h3 style={{ color: "red" }}>{error}</h3>
          </div>
        ))}
    </Fragment>
  );
};

export default alert;
