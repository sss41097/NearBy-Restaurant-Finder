import React, { useState } from "react";
import logo from "./logo.svg";
import LandingPage from "./landingPage";
import RestaurantReviews from "./restaurantReviews";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [city, setCity] = useState("");
  const [initialMount, changeMountStatus] = useState(false);
  const [restaurants, fetchRestaurants] = useState([]);
  const [reviews, setReviews] = useState([]);

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
