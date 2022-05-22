import React from "react";

const Tool = ({ tool }) => {
  const { img, name, description, minOrderQuantity, availableQuantity, price } =
    tool;
  return (
    <div class="card w-96 glass hover:bg-secondary mx-auto bg-secondary text-white">
      <div class="card mx-auto mt-3">
        <figure>
          <img src={img} alt="product" className="h-56" />
        </figure>
      </div>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
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
        <div class="card-actions  justify-around items-center mt-3">
          <h2 className="text-xl font-semibold ">
            Price: <span className="text-primary">{price}</span>
          </h2>
          <button class="btn btn-primary">Purchase Now</button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
