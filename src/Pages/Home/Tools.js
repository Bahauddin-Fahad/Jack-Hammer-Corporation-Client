import React, { useEffect } from "react";
import Tool from "./Tool";
import useReactQuery from "../../Hooks/useReactQuery";
import { Link } from "react-router-dom";

const Tools = () => {
  const url = "https://jack-hammer-corporation-server.herokuapp.com/tools";
  const { data: tools, refetch } = useReactQuery(url);
  useEffect(() => {
    // refetch();
  });
  return (
    <div className="m-10">
      <h2 className="font-bold text-3xl text-center">Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
        {tools?.slice(-6).map((tool) => (
          <Tool key={tool._id} tool={tool} refetch={refetch} />
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          className="no-underline inline-block bg-primary text-secondary font-bold py-1 px-3 mt-4 rounded-md mx-auto w-2/5 text-center"
          to="/dashboard/manageTools"
        >
          Manage Tools
        </Link>
      </div>
    </div>
  );
};

export default Tools;
