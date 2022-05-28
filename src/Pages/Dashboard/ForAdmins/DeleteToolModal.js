import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
const DeleteToolModel = ({ deleteTool, setDeleteTool, refetch }) => {
  const { _id, name } = deleteTool;
  const handleDelete = (id) => {
    const url = `https://jack-hammer-corporation-server.herokuapp.com/tool/${id}`;
    const header = {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    };
    axios.delete(url, header).then((data) => {
      if (data.data.acknowledged) {
        toast.success(`${name} is Deleted Successfully`, { theme: "colored" });
        refetch();
        setDeleteTool(null);
      } else {
        toast.error(`Can't Delete ${name}`, { theme: "colored" });
      }
    });
  };
  return (
    <div>
      <input type="checkbox" id="delete-tool-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <label
            htmlFor="delete-tool-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <h3 className="font-bold text-lg">{`Are you sure You Want to Delete ${name}?`}</h3>
          <div className="modal-action">
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-sm btn-outline btn-error"
            >
              Confirm
            </button>
            <label htmlFor="delete-tool-modal" className="btn btn-sm">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteToolModel;
