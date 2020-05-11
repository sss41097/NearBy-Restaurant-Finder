import React from "react";

const eachReview = ({ review }) => {
  console.log(review);

  return (
    <div style={{ color: "black" }}>
      <div class="media col-md-2">
        <figure class="pull-left">
          <img
            class="media-object img-rounded img-responsive"
            src={review.review.user.profile_image}
            style={{ height: "101px", width: "100px", borderRadius: "25px" }}
            alt="placehold.it/350x250"
          />
        </figure>
      </div>
      <div class="col-md-6">
        <h4 class="list-group-item-heading">
          {" "}
          {review.review.user.name} Review
        </h4>
        <p class="list-group-item-text">
          {" "}
          {review.review.review_text === ""
            ? "No Review Given by this User !"
            : review.review.review_text.split(".").slice(0, 4).join("\n")}
        </p>
      </div>
      <div class="col-md-3 text-center">
        <h2> Rating Given: {review.review.rating}</h2>
        <div style={{ height: "80px" }}></div>
      </div>
    </div>
  );
};

export default eachReview;
