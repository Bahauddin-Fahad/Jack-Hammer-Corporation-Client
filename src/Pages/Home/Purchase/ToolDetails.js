import React from "react";
// import { useParams } from "react-router-dom";
// import useReactQuery from "../../../Hooks/useReactQuery";

const ToolDetails = ({ tool }) => {
  return (
    <div className="rounded-none mx-auto px-3 flex flex-col lg:flex-row mb-4">
      <div className="card mx-auto">
        <figure>
          <img
            src={tool?.img}
            alt="product"
            className="min-w-xs lg:max-w-sm my-4"
          />
        </figure>
      </div>
      <div className="bg-secondary text-left my-auto mx-auto p-4 rounded-lg w-1/2">
        <h2 className=" text-3xl text-primary font-bold">{tool?.name}</h2>
        <p className="text-left text-primary font-semibold w-9/12">
          Description:{" "}
          <span className="text-white font-medium">{tool?.description}</span>
        </p>
        <p className="text-lg text-primary font-semibold">
          Minimum Order : {""}
          <span className="text-white">{tool?.minOrderQuantity} pieces</span>
        </p>
        <p className="text-lg text-primary font-semibold">
          Available Quantity :{" "}
          <span className="text-white">{tool?.availableQuantity} pieces</span>{" "}
        </p>
        <div className="card-actions lg:mt-3">
          <h2 className="text-xl font-semibold text-primary">
            Price: <span className="text-white"> ${tool?.price}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ToolDetails;
