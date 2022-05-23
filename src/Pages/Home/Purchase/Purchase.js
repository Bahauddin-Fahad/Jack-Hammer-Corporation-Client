import React from "react";
import { useParams } from "react-router-dom";
import useReactQuery from "../../../Hooks/useReactQuery";
import OrderForm from "./OrderForm";
import ToolDetails from "./ToolDetails";

const Purchase = () => {
  const { toolId } = useParams();
  const url = `http://localhost:5000/purchase/${toolId}`;
  const { data: tool, refetch } = useReactQuery(url);
  return (
    <div className="glass bg-secondary hover:bg-secondary text-white pb-3">
      <ToolDetails refetch={refetch} tool={tool} />
      <OrderForm tool={tool} />
    </div>
  );
};

export default Purchase;
