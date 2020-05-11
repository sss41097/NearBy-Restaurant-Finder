import React, { Component } from "react";
import { Link } from "react-router-dom";

class restaurants extends Component {
  render() {
    const restaurantList = this.props.restaurants.map((restaurant) => (
      <div
        className="col-md-4"
        key={restaurant.restaurant.id}
        style={{ borderRadius: "25px" }}
      >
        <div
          className="thumbnail text-center"
          style={{ borderRadius: "25px", backgroundColor: "#a3c1ce" }}
        >
          <img
            src={`${restaurant.restaurant.featured_image}`}
            style={{ height: "200px", width: "200px", borderRadius: "25px" }}
          />

          <b style={{ color: "black" }}>
            Restaurant Name : {restaurant.restaurant.name}
          </b>
          <br />
          <b style={{ color: "black" }}>
            Locality : {restaurant.restaurant.location.locality}
          </b>
          <br />
          <b style={{ color: "black" }}>
            Cuisines : {restaurant.restaurant.cuisines.split(",")[0]},{" "}
            {restaurant.restaurant.cuisines.split(",")[1]}
          </b>
          <br />
          <Link
            to={`/reviews/${restaurant.restaurant.id}`}
            className="btn btn-primary"
          >
            View Reviews
          </Link>
        </div>
      </div>
    ));

    return (
      <div className="row">
        {console.log("Hi")}
        {restaurantList}
      </div>
    );
  }
}

export default restaurants;
