import React from "react";
import useReactQuery from "../../Hooks/useReactQuery";
const Reviews = () => {
  const url = "http://localhost:5000/reviews";
  const { data: reviews } = useReactQuery(url);

  return (
    <div>
      <h2 className="text-center font-bold text-3xl mt-3">All Reviews</h2>
      <div className="mb-8 container p-3 flex flex-wrap gap-5">
        {reviews?.slice(-3).map((review) => {
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
              className="max-w-xs rounded-xl p-3 text-neutral-focus ring-4 ring-neutral-focus font-medium"
            >
              <h3 className="">Email: {review?.email}</h3>
              <h4>Comment : </h4>
              <h5 className="text-sm text-gray-800/80 h-20 overflow-auto">
                {review?.comment}
              </h5>
              <p className="py-1 px-3 bg-neutral-focus text-white inline-block rounded">
                Rating : {showRating()}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
