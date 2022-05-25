import React, { useEffect } from "react";
import Tool from "./Tool";
import useReactQuery from "../../Hooks/useReactQuery";

const Tools = () => {
  const url = "http://localhost:5000/tools";
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
    </div>
  );
};

export default Tools;
