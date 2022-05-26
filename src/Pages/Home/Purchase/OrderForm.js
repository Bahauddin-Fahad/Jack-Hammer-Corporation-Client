import axios from "axios";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const OrderForm = ({ tool, refetch }) => {
  let _id, price, minOrderQuantity, availableQuantity;

  if (tool) {
    _id = tool._id;
    price = tool.price;
    minOrderQuantity = tool.minOrderQuantity;
    availableQuantity = tool.availableQuantity;
  }
  const { register, handleSubmit, reset } = useForm();
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [user] = useAuthState(auth);

  const quantityCheck = (e) => {
    const inputQuantity = parseInt(e.target.value);
    if (inputQuantity < minOrderQuantity) {
      setError(
        <p className="text-sm text-primary font-bold mt-2">
          Can't Order Below Minimum Order Quantity
        </p>
      );
    } else if (inputQuantity > availableQuantity) {
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

  const onSubmit = async (data) => {
    const name = user.displayName;
    const email = user.email;
    if (!quantity) {
      setQuantity(minOrderQuantity);
    }
    if (quantity <= availableQuantity && quantity >= minOrderQuantity) {
      const orderDetails = {
        name: name,
        email: email,
        phone: data.phone,
        address: data.address,
        toolId: _id,
        toolName: tool?.name,
        totalPrice: quantity ? quantity * price : minOrderQuantity * price,
        quantity: quantity,
      };
      console.log(orderDetails);
      setError("");
      const orderUrl = "http://localhost:5000/order";
      await axios.post(orderUrl, orderDetails).then((response) => {
        console.log(response.data);
        if (response.data.success) {
          toast.success(
            `Your order for ${quantity} pieces of ${tool?.name} is Confirmed`,
            {
              theme: "colored",
            }
          );
          refetch();
          reset();
          const remaniningQuantity = availableQuantity - quantity;
          const newAvailableQuantity = { remaniningQuantity };
          const url = `http://localhost:5000/tool/${_id}`;
          axios.put(url, newAvailableQuantity).then((res) => {
            console.log(res);
          });
        } else {
          toast.error(
            `You already have ordered for ${tool?.name} of amount ${quantity} pieces`,
            {
              theme: "colored",
            }
          );
        }
        // refetch();
      });
    }
  };
  return (
    <div className="flex justify-center">
      <form
        className="form card w-full max-w-lg shadow-2xl glass mx-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="card-body">
          <h2 className="text-2xl font-bold">Order Form</h2>
          <div className="form-control">
            <label className="label font-semibold">
              <span className="label-text text-primary">Name</span>
            </label>
            <input
              className="input input-bordered text-secondary font-semibold placeholder:text-secondary"
              placeholder={user?.displayName || ""}
              readOnly
            />
          </div>
          <div className="form-control">
            <label className="label font-semibold">
              <span className="label-text text-primary">Email</span>
            </label>
            <input
              className="input input-bordered text-secondary font-semibold placeholder:text-secondary"
              placeholder={user?.email || ""}
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
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-2">
            <div className="form-control ">
              <label className="label font-semibold">
                <span className="label-text text-primary">Quantity</span>
              </label>
              <input
                onChange={quantityCheck}
                className="input input-bordered text-secondary font-semibold"
                value={quantity || minOrderQuantity}
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
                className="input input-bordered text-secondary font-semibold placeholder:text-secondary"
                placeholder={price}
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
                className="input input-bordered text-secondary font-semibold placeholder:text-secondary"
                value={quantity * price || minOrderQuantity * price}
                type="number"
                required
                readOnly
                // {...register("totalPrice", { required: true })}
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
