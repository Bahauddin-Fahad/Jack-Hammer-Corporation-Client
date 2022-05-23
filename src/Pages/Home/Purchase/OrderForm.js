import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../../firebase.init";

const OrderForm = ({ tool }) => {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const [user] = useAuthState(auth);
  const onSubmit = (data) => {
    const quantity = parseInt(data.quantity);
    data.userName = user?.displayName;
    data.userEmail = user?.email;
    if (quantity < tool.minOrderQuantity) {
      setError(
        <p className="text-sm text-primary font-bold mt-2">
          Can't Order Below Minimum Order Quantity
        </p>
      );
    } else if (quantity > tool.availableQuantity) {
      setError(
        <p className="text-sm text-primary font-bold mt-2">
          Sorry!! The Quantity you want is not available right now
        </p>
      );
    } else {
      data.quantity = quantity;

      setError("");

      console.log(data);
    }
  };
  return (
    <div>
      <form
        className="form card w-full max-w-md shadow-2xl glass mx-auto "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="card-body">
          <h2 className="text-2xl font-bold">Order Form</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-primary">Name</span>
            </label>
            <input
              className="input input-bordered text-secondary font-semibold m-0"
              value={user?.displayName}
              {...register("userName")}
              readOnly
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-primary">Email</span>
            </label>
            <input
              className="input input-bordered text-secondary font-semibold"
              value={user?.email}
              {...register("userEmail")}
              readOnly
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-primary">Address</span>
            </label>
            <input
              className="input input-bordered text-secondary font-semibold"
              placeholder="Your Address"
              {...register("address", { required: true, maxLength: 20 })}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-primary">Phone</span>
            </label>
            <input
              className="input input-bordered text-secondary font-semibold"
              placeholder="Phone"
              type="number"
              {...register("phone", { required: true })}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-primary">Quantity</span>
            </label>
            <input
              className="input input-bordered text-secondary font-semibold"
              placeholder="Tool Quantity"
              type="number"
              {...register("quantity", { required: true })}
            />
            {error}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary" type="submit">
              Place Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
