import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import ListRestaurants from "./ListRestaurants";
import Spinner from "./layout/spinner";

function LandingPage({
  city,
  setCity,
  initialMount,
  restaurants,
  fetchRestaurants,
  changeMountStatus,
  setReviews,
}) {
  useEffect(() => {
    setReviews([]);
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);

      const url = `https://eu1.locationiq.com/v1/reverse.php?key=ad3f82c0ee7799&lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`;
      console.log(url);
      axios
        .get(url)
        .then((res) => {
          console.log(res.data.address.city);
          changeMountStatus(true);
          setCity(res.data.address.city);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }, []);

  useEffect(() => {
    if (initialMount === true) {
      fetch(
        `https://developers.zomato.com/api/v2.1/cities?q=${city}&apikey=8fa87ac61412b80b53536a2aa6e45648`
      )
        .then((res) => res.json())
        .then((data) => {
          const cityId = data.location_suggestions[0].id;
          fetch(
            `https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&start=1&count=10&sort=rating&order=desc&apikey=8fa87ac61412b80b53536a2aa6e45648`
          )
            .then((res) => res.json())
            .then((data) => {
              fetchRestaurants(data.restaurants);

              // data.restaurants.forEach((restaurant) => {
              //   const res_id = restaurant.restaurant.id;
              //   fetch(
              //     `https://developers.zomato.com/api/v2.1/reviews?res_id=${res_id}&apikey=8fa87ac61412b80b53536a2aa6e45648`
              //   )
              //     .then((res) => res.json())
              //     .then((review) => {
              //       const restaurantObj = {
              //         currentRestaurant: restaurant,
              //         review: review,
              //       };
              //       console.log(restaurantObj);
              //       fetchRestaurants([...restaurants, restaurantObj]);
              //     })
              //     .catch((error) => {
              //       console.log(error);
              //     });
              // });
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [city]);

  return (
    <div>
      {console.log(initialMount)}

      {restaurants.length > 0 ? (
        <div>
          {" "}
          <h1 class="text-center" style={{ color: "black" }}>
            Your current City is : {city}
          </h1>
          <ListRestaurants restaurants={restaurants} />
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default LandingPage;
