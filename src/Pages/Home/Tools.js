import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Tool from "./Tool";
import Loading from "../Shared/Loading";

const Tools = () => {
  const {
    data: tools,
    isLoading,
    refetch,
  } = useQuery("tools", () =>
    axios.get("http://localhost:5000/tools").then((data) => {
      return data.data;
    })
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="m-10">
      <h2 className="font-bold text-3xl text-center">Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
        {tools?.map((tool) => (
          <Tool key={tool._id} tool={tool} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default Tools;
