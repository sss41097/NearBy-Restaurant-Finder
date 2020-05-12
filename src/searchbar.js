import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Autocomplete from "@material-ui/lab/Autocomplete";

// this the the search bar component which is displayed on main page
const Searchbar = ({ setFilteredRestaurants, restaurants }) => {
  const [search, setInput] = useState("");
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    restaurants.map((restaurant) => {
      setRestaurantList((oldArray) => [
        ...oldArray,
        restaurant.restaurant.name,
      ]);
    });
  }, []);

  const setFiltering = (e) => {
    let Filtered = [];
    Filtered = restaurants.filter((restaurant) => {
      return restaurant.restaurant.name
        .toLowerCase()
        .startsWith(search.toLowerCase());
    });

    setFilteredRestaurants(Filtered);
  };

  return (
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <h2>Search Nearby Resataurants</h2>
        </div>
        <div class="col-sm">
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            onChange={(e, v) => setInput(v)}
            style={{ color: "white" }}
            options={restaurantList}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Start Typing Here"
                margin="normal"
                variant="outlined"
                value={search}
                onChange={({ target }) => setInput(target.value)}
                InputProps={{ ...params.InputProps, type: "search" }}
              />
            )}
          />
        </div>
        <div class="col-sm">
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setFiltering();
            }}
          >
            Search
          </Button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
