// import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
import useReactQuery from "../../../Hooks/useReactQuery";
import DeleteConfirmModel from "./DeleteConfirmModal";
import ManageTool from "./ManageTool";

const ManageTools = () => {
  const [deleteTool, setDeleteTool] = useState(null);
  const url = "https://jack-hammer-corporation-server.herokuapp.com/tools";
  const header = {
    headers: {
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  };
  const { data: tools, refetch } = useReactQuery(url, header);
  // const handleDelete = (id) => {
  //   const url = `http://localhost:5000/tool/${id}`;
  //   const header = {
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //     },
  //   };
  //   axios.delete(url, header).then((data) => {
  //     console.log(data);
  //     if (data.data.acknowledged) {
  //       toast.success("Tool is Deleted Successfully", { theme: "colored" });
  //       refetch();
  //     } else {
  //       toast.error("Can't Delete the Tool", { theme: "colored" });
  //     }
  //   });
  // };
  return (
    <div className="">
      <h2 className="text-left ml-3 text-lg text-primary font-bold">
        Manage Tools
      </h2>
      <div className="my-3 min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mx-3">
          {tools?.map((tool) => (
            <ManageTool
              key={tool._id}
              tool={tool}
              setDeleteTool={setDeleteTool}
              // handleDelete={handleDelete}
            />
          ))}
        </div>
        {deleteTool && (
          <DeleteConfirmModel
            deleteTool={deleteTool}
            setDeleteTool={setDeleteTool}
            refetch={refetch}
          />
        )}
        <div className="flex justify-center">
          <Link
            className="no-underline inline-block bg-primary text-secondary font-bold py-1 px-3 mt-4 rounded-md mx-auto w-2/5 text-center"
            to="/dashboard/addTool"
          >
            Add New Tool
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ManageTools;
