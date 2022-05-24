import React from "react";
import { useNavigate } from "react-router-dom";

const Tool = ({ tool }) => {
  const navigate = useNavigate();
  const {
    _id,
    img,
    name,
    description,
    minOrderQuantity,
    availableQuantity,
    price,
  } = tool;
  return (
    <div className="card glass hover:bg-secondary mx-auto bg-secondary text-white">
      <div className="card glass mx-auto mt-3">
        <figure>
          <img src={img} alt="product" className="h-56" />
        </figure>
      </div>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-sm">{description}</p>
        <p className="text-left text-lg ">
          Minimum Order :
          <span className="text-primary font-semibold">
            {" "}
            {minOrderQuantity}{" "}
          </span>
          pieces
        </p>
        <p className="text-left text-lg">
          Available Quantity :{" "}
          <span className="text-primary font-semibold">
            {availableQuantity}
          </span>{" "}
          pieces
        </p>
        <div className="card-actions  justify-around items-center mt-3">
          <h2 className="text-xl font-semibold ">
            Price: <span className="text-primary"> ${price}</span>
          </h2>
          <button
            onClick={() => navigate(`/purchase/${_id}`)}
            className="btn btn-primary font-bold"
          >
            Purchase Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
