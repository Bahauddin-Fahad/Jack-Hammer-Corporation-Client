import React from "react";

const Review = ({ review }) => {
  const showRating = () => {
    const rate = review?.rating;
    let star = "";
    for (let i = 0; i < rate; i++) {
      star += "⭐";
    }
    return star;
  };
  return (
    <div
      key={review._id}
      className="max-w-xs rounded-lg p-3 ring-2 ring-primary font-medium bg-secondary hover:bg-secondary mb-8 shadow-lg glass text-white"
    >
      <h3 className="">Email: {review?.email}</h3>
      <h4>Comment : </h4>
      <h5 className="text-sm h-20 overflow-auto">{review?.comment}</h5>
      <p className="py-1 px-3 bg-secondary  border-white border-2 text-white rounded-md">
        Rating : {showRating()}
      </p>
    </div>
  );
};

export default Review;
