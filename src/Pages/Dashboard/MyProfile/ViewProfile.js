import React from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import auth from "../../../firebase.init";
// import useReactQuery from "../../../Hooks/useReactQuery";
// import UpdateProfile from "./UpdateProfile";

const ViewProfile = ({ profile }) => {
  return (
    <div className="flex justify-center">
      <div className="card border-2 w-full max-w-lg shadow-2xl ">
        <h2 className="text-2xl font-bold  underline text-white mt-8">
          My Profile
        </h2>
        <div className="flex justify-center mt-8">
          <div className="flex justify-center items-center w-36 h-36 bg-secondary rounded-full ring-white ring-2 shadow-xl">
            <img className="rounded-full w-32 h-32" src={profile?.img} alt="" />
          </div>
        </div>
        <div className="card-body">
          <div className=" text-secondary font-semibold w-full text-left rounded-sm">
            <p className="text-white">
              Name :<span className=""> {profile?.name}</span>
            </p>
          </div>
          <div className=" text-secondary font-semibold w-full text-left rounded-sm">
            <p className="text-white">
              Email :<span className=""> {profile?.email}</span>
            </p>
          </div>
          <div className=" text-secondary font-semibold w-full text-left rounded-sm">
            <p className="text-white">
              Address :<span className=""> {profile?.address}</span>
            </p>
          </div>
          <div className=" text-secondary font-semibold w-full text-left rounded-sm">
            <p className="text-white">
              Phone :<span className=""> {profile?.phone}</span>
            </p>
          </div>
          <div className=" text-secondary font-semibold w-full text-left rounded-sm">
            <p className="text-white">
              {" "}
              LinkedIn Profile :
              <a
                href="https://www.linkedin.com/in/s-m-bahauddin-fahad-33a773229"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                <span className=""> {profile?.linkedIn}</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
