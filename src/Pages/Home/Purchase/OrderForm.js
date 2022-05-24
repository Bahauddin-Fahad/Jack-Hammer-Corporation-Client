import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../../firebase.init";

const OrderForm = ({ tool }) => {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [user] = useAuthState(auth);

  const quantityCheck = (e) => {
    const inputQuantity = parseInt(e.target.value);
    if (inputQuantity < tool.minOrderQuantity) {
      setError(
        <p className="text-sm text-primary font-bold mt-2">
          Can't Order Below Minimum Order Quantity
        </p>
      );
    } else if (inputQuantity > tool.availableQuantity) {
      setError(
        <p className="text-sm text-primary font-bold mt-2">
          Sorry!! The Quantity you want is not available right now
        </p>
      );
    } else {
      setError("");
    }
    setQuantity(inputQuantity);
  };

  const onSubmit = (data) => {
    data.name = user?.displayName;
    data.email = user?.email;
    const totalPrice = parseInt(data.totalPrice);
    data.totalPrice = totalPrice;
    if (!quantity) {
      setQuantity(tool.minOrderQuantity);
    }
    if (
      quantity <= tool?.availableQuantity &&
      quantity >= tool?.minOrderQuantity
    ) {
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
            <label className="label font-semibold">
              <span className="label-text text-primary">Name</span>
            </label>
            <input
              className="input input-bordered text-secondary font-semibold m-0"
              value={user?.displayName}
              {...register("name")}
              readOnly
            />
          </div>
          <div className="form-control">
            <label className="label font-semibold">
              <span className="label-text text-primary">Email</span>
            </label>
            <input
              className="input input-bordered text-secondary font-semibold"
              value={user?.email}
              {...register("email")}
              readOnly
            />
          </div>
          <div className="form-control">
            <label className="label font-semibold">
              <span className="label-text text-primary">Address</span>
            </label>
            <input
              className="input input-bordered text-secondary font-semibold"
              placeholder="Your Address"
              {...register("address", { required: true, maxLength: 20 })}
            />
          </div>
          <div className="form-control">
            <label className="label font-semibold">
              <span className="label-text text-primary">Phone</span>
            </label>
            <input
              className="input input-bordered text-secondary font-semibold"
              placeholder="Phone"
              type="number"
              {...register("phone", { required: true })}
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="form-control ">
              <label className="label font-semibold">
                <span className="label-text text-primary">Quantity</span>
              </label>
              <input
                onChange={quantityCheck}
                className="input input-bordered text-secondary font-semibold"
                value={quantity || tool?.minOrderQuantity}
                type="number"
                required
              />
            </div>
            <div className="form-control">
              <label className="label font-semibold">
                <span className="label-text text-primary">
                  Per Unit <small>(USD)</small>
                </span>
              </label>
              <input
                className="input input-bordered text-secondary font-semibold"
                value={tool?.price}
                type="number"
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label font-semibold">
                <span className="label-text text-primary">
                  Total Price <small>(USD)</small>
                </span>
              </label>
              <input
                className="input input-bordered text-secondary font-semibold"
                placeholder="Total Price"
                value={
                  quantity * tool?.price || tool?.minOrderQuantity * tool?.price
                }
                type="number"
                {...register("totalPrice", { required: true })}
                required
              />
            </div>
          </div>
          {error}
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
