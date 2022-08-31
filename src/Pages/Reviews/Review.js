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
      data-aos="zoom-in-up"
      data-aos-duration="500"
      className="w-11/12 rounded-lg p-3 ring-2 ring-primary font-medium bg-secondary hover:bg-secondary mb-8 shadow-lg glass text-white flex flex-col justify-between mx-auto"
    >
      <div className="flex justify-center my-2">
        <div className="flex justify-center items-center w-28 h-28 bg-secondary rounded-full ring-white ring-2 shadow-xl">
          <img
            className="rounded-full w-24 h-24 object-cover"
            src={review?.img}
            alt=""
          />
        </div>
      </div>
      <div>
        <h3 className="text-lg text-primary font-bold">{review?.name}</h3>
        <h3 className="mb-2 text-lg">{review?.email}</h3>
        <h5 className="text-sm h-20 overflow-auto">{review?.comment}</h5>
      </div>
      <p className="py-1 px-3 bg-secondary  border-white border-2 text-white rounded-md">
        Rating : {showRating()}
      </p>
    </div>
  );
};

export default Review;
