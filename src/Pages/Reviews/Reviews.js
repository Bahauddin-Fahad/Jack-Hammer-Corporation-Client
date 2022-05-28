import React from "react";
import useReactQuery from "../../Hooks/useReactQuery";
import Review from "./Review";
const Reviews = () => {
  const url = "http://localhost:5000/reviews";
  const { data: reviews } = useReactQuery(url);
  return (
    <div className="mt-10">
      <h2 className="text-center font-bold text-3xl mt-3">All Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-4">
        {reviews?.slice(-3).map((review) => (
          <Review key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
