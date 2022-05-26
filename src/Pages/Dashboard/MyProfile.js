import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const name = user?.displayName;
    const email = user?.email;
    const phone = data.phone;
    const address = data.address;
    const linkedIn = data.linkedIn;
    const profile = { name, email, phone, address, linkedIn };
    console.log(profile);
    await axios
      .put(
        `https://jack-hammer-corporation-server.herokuapp.com/user/${email}`,
        profile
      )
      .then((data) => {
        if (data) {
          toast.success("Information Updated", { theme: "colored" });
          reset();
        }
      });
  };

  return (
    <div className="flex justify-center">
      <form
        className="form card w-full max-w-lg shadow-2xl glass mx-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="card-body">
          <h2 className="text-2xl font-bold  underline text-white">
            Update Profile
          </h2>
          <div className="grid grid-cols-2 gap-2">
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
          </div>
          <div className="form-control">
            <label className="label font-semibold">
              <span className="label-text text-primary">Address</span>
            </label>
            <input
              className="input input-bordered text-secondary font-semibold"
              placeholder="Your Address"
              {...register("address", { required: true })}
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
          <div className="form-control ">
            <label className="label font-semibold">
              <span className="label-text text-primary">LinkedIn</span>
            </label>
            <input
              placeholder="LinkedIn URL"
              className="input input-bordered text-secondary font-semibold"
              {...register("linkedIn", { required: true })}
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary" type="submit">
              Update Profile
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MyProfile;
