import React from "react";
import Tool from "./Tool";
import useReactQuery from "../../Hooks/useReactQuery";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";
import { FaAngleDoubleRight } from "react-icons/fa";
const OrderTools = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const url = "https://jack-hammer-corporation-server.herokuapp.com/tools";
  const { data: tools, refetch } = useReactQuery(url);

  return (
    <div className="m-10">
      <h2 className="font-bold text-4xl">Our Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
        {tools?.map((tool) => (
          <Tool key={tool._id} tool={tool} refetch={refetch} />
        ))}
      </div>
      {admin && (
        <>
          <Link
            className="no-underline font-bold text-center py-1 px-3 bg-secondary text-primary w-2/12 rounded-md flex items-center justify-center gap-2 mx-auto mt-4"
            to="/dashboard/manageTools"
          >
            Manage Tools <FaAngleDoubleRight />
          </Link>
        </>
      )}
    </div>
  );
};

export default OrderTools;
