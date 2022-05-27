import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const UpdateProfile = () => {
  const [user] = useAuthState(auth);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const name = user?.displayName;
    const email = user?.email;
    const phone = data.phone;
    const img =
      data.img ||
      "https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image-300x300.jpeg";
    const address = data.address;
    const linkedIn = data.linkedIn;
    const profile = { name, email, phone, img, address, linkedIn };

    const url = `https://jack-hammer-corporation-server.herokuapp.com/user/${email}`;

    await axios.put(url, profile).then((data) => {
      if (data) {
        toast.success("Information Updated", { theme: "colored" });
        reset();
      }
    });
  };
  return (
    <div className="flex justify-center">
      <form
        className="form card w-full max-w-lg shadow-2xl glass pb-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mx-6 shadow-xl">
          <h2 className="text-2xl font-bold  underline text-white mt-8">
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
          <div className="grid grid-cols-2 gap-2">
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
            <div className="form-control">
              <label className="label font-semibold">
                <span className="label-text text-primary">Image URL</span>
              </label>
              <input
                className="input input-bordered text-secondary font-semibold"
                placeholder="Image URL"
                type="text"
                {...register("img")}
              />
            </div>
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

export default UpdateProfile;
