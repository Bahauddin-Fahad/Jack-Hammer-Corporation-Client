import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const UserList = ({ user, setDeleteUser, index, refetch }) => {
  const { email, role } = user;
  const header = {
    headers: {
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  };
  const makeAdmin = () => {
    const url = `http://localhost:5000/user/${email}`;
    axios
      .patch(url, {}, header)
      .then((data) => {
        console.log(data);
        if (data.data.modifiedCount > 0) {
          refetch();
          toast.success(`${email} is added as an Admin Successfully`, {
            theme: "colored",
          });
        }
      })
      .catch((error) => {
        if (error.response.status === 403) {
          toast.error("Failed to make an Admin", { theme: "colored" });
        }
      });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} className="btn btn-xs text-white">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <div>
          <label
            htmlFor="delete-user-modal"
            onClick={() => {
              setDeleteUser(user);
            }}
            className="btn btn-error btn-xs text-white  mt-2"
          >
            Remove User
          </label>
        </div>
        {/* <button
          htmlFor="delete-confirm-modal"
          onClick={removeUser}
          className="btn btn-error btn-xs text-white"
        ></button> */}
      </td>
    </tr>
  );
};

export default UserList;
