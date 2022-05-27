import React from "react";
import useReactQuery from "../../Hooks/useReactQuery";
import Review from "./Review";

const ReviewsComp = () => {
  const url = "http://localhost:5000/reviews";
  const { data: reviews } = useReactQuery(url);
  return (
    <div className="glass bg-secondary hover:bg-secondary">
      <h1 className="text-center text-2xl font-bold text-primary">
        All Reviews{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-4">
        {reviews?.map((review) => (
          <Review key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewsComp;
