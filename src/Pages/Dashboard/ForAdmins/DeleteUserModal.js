import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
const DeleteUserModal = ({ deleteUser, setDeleteUser, refetch }) => {
  const { email, name } = deleteUser;
  const removeUser = (email) => {
    const url = `https://jack-hammer-corporation-server.herokuapp.com/user/${email}`;
    const header = {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    };
    axios.delete(url, header).then((data) => {
      if (data.data.acknowledged) {
        toast.success(`${name} is Deleted Successfully`, { theme: "colored" });
        refetch();
        setDeleteUser(null);
      } else {
        toast.error(`Can't Delete ${name}`, { theme: "colored" });
      }
    });
  };
  return (
    <div>
      <input type="checkbox" id="delete-user-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{`Are you sure You Want to Delete ${name}?`}</h3>
          <div className="modal-action">
            <button
              onClick={() => removeUser(email)}
              className="btn btn-sm btn-outline btn-error"
            >
              Confirm
            </button>
            <label htmlFor="delete-user-modal" className="btn btn-sm">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteUserModal;
