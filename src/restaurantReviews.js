import React, { useEffect, useState } from "react";
import EachReview from "./eachReview";
import Spinner from "./layout/spinner";

function RestaurantReviews({ city, restaurants, setReviews, reviews, match }) {
  const [loading, changeLoading] = useState(true);

  useEffect(() => {
    console.log(match.params.id);
    fetch(
      `https://developers.zomato.com/api/v2.1/reviews?res_id=${match.params.id}&apikey=8fa87ac61412b80b53536a2aa6e45648`
    )
      .then((res) => res.json())
      .then((revieww) => {
        console.log(revieww.user_reviews);
        setReviews(revieww.user_reviews);
        changeLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return loading === true ? (
    <Spinner />
  ) : (
    <div className="container">
      <div className="row">
        <div className="list-group">
          <h1 class="text-center" style={{ color: "black" }}>
            Reviews
          </h1>
          {reviews.map((review) => (
            <EachReview review={review} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RestaurantReviews;
