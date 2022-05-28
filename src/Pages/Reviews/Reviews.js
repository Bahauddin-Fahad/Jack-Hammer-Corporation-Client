import React from "react";
import useReactQuery from "../../Hooks/useReactQuery";
import Review from "./Review";

const Reviews = () => {
  const url = "https://jack-hammer-corporation-server.herokuapp.com/reviews";
  const { data: reviews } = useReactQuery(url, {}, "reviews");
  return (
    <div className="my-10">
      <h2 className="text-center font-bold text-4xl my-3">All Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-10">
        {reviews
          ?.slice(-3)
          .reverse()
          .map((review) => (
            <Review key={review._id} review={review} />
          ))}
      </div>
    </div>
  );
};

export default Reviews;
