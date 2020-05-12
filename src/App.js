import React, { useState } from "react";
import logo from "./logo.svg";
import LandingPage from "./landingPage";
import RestaurantReviews from "./restaurantReviews";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [city, setCity] = useState("");
  const [initialMount, changeMountStatus] = useState(false);
  const [restaurants, fetchRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setloading] = useState(true);

  return (
    <div>
      <Router>
        <Route
          exact
          path="/"
          render={(props) => (
            <LandingPage
              {...props}
              city={city}
              setCity={setCity}
              initialMount={initialMount}
              changeMountStatus={changeMountStatus}
              restaurants={restaurants}
              fetchRestaurants={fetchRestaurants}
              reviews={reviews}
              setReviews={setReviews}
              setFilteredRestaurants={setFilteredRestaurants}
              filteredRestaurants={filteredRestaurants}
              loading={loading}
              setloading={setloading}
            />
          )}
        />
        <Route
          exact
          path="/reviews/:id"
          render={(props) => (
            <RestaurantReviews
              {...props}
              city={city}
              setCity={setCity}
              initialMount={initialMount}
              changeMountStatus={changeMountStatus}
              restaurants={restaurants}
              fetchRestaurants={fetchRestaurants}
              reviews={reviews}
              setReviews={setReviews}
            />
          )}
        />
      </Router>
    </div>
  );
}

export default App;
