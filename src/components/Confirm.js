import React from "react";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

// this function lets you check all the details before submitting
const Confirm = ({ formData, handleNext, handlePrev }) => {
  return (
    <div
      style={{
        marginTop: "30px",

        textAlign: "center",
        maxWidth: "360",
      }}
    >
      <h1>Are you sure you want to submit? You can Go back and Edit.</h1>
      <List>
        <ListItem>
          <ListItemText primary="First Name" secondary={formData.firstname} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Last Name" secondary={formData.lastname} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Email ID" secondary={formData.email} />
        </ListItem>
        <ListItem>
          <ListItemText primary="City" secondary={formData.city} />
        </ListItem>
        <ListItem>
          <ListItemText primary="State" secondary={formData.state} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Pin Code" secondary={formData.pincode} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Phone Number" secondary={formData.city} />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Did you like This Form ? "
            secondary={
              formData.checked === true
                ? "Yes, I like it"
                : "No, i did not like it"
            }
          />
        </ListItem>
      </List>
      <br />
      <br />
      <Button variant="contained" color="secondary" onClick={handlePrev}>
        Back
      </Button>
      &nbsp; &nbsp;
      <Button variant="contained" color="primary" onClick={handleNext}>
        Confirm
      </Button>
    </div>
  );
};
export default Confirm;
