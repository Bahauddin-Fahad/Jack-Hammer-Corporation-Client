import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile bg-secondary hover:bg-secondary glass fadeIn">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content mt-2">
        <h2 className="text-right mr-3 font-bold text-primary text-xs">
          Logged In as : {user.email}
        </h2>
        <h2 className="font-bold text-primary text-2xl text-center">
          Dashboard
        </h2>

        <div className="py-5">
          {" "}
          <Outlet />
        </div>
      </div>
      <div className="drawer-side ">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-64 bg-secondary text-base-content">
          {/* <!-- Sidebar content here --> */}

          <li>
            <Link className="text-primary font-bold" to="/dashboard">
              My Profile
            </Link>
          </li>
          {user && !admin && (
            <>
              <li>
                <Link
                  className="text-primary font-bold"
                  to="/dashboard/myOrders"
                >
                  My Orders
                </Link>
              </li>
              <li>
                <Link
                  className="text-primary font-bold"
                  to="/dashboard/addReview"
                >
                  Add A Review
                </Link>
              </li>
            </>
          )}

          {admin && (
            <>
              <li>
                <Link
                  className="text-primary font-bold"
                  to="/dashboard/makeAdmin"
                >
                  Make Admin
                </Link>
              </li>
              <li>
                <Link
                  className="text-primary font-bold"
                  to="/dashboard/addTool"
                >
                  Add A Tool
                </Link>
              </li>
              <li>
                <Link
                  className="text-primary font-bold"
                  to="/dashboard/manageTools"
                >
                  Manage Tools
                </Link>
              </li>
              <li>
                <Link
                  className="text-primary font-bold"
                  to="/dashboard/manageAllOrders"
                >
                  Manage All Orders
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
