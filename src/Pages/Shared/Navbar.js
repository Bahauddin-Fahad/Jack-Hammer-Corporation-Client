import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  const menuItems = (
    <>
      <li>
        <Link className="font-semibold text-primary" to="/">
          Home
        </Link>
      </li>
      {user && (
        <>
          <li>
            <Link className="font-semibold text-primary" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li>
            <Link className="font-semibold text-primary" to="/myprofile">
              My Profile
            </Link>
          </li>
        </>
      )}

      <li>
        <Link className="font-semibold text-primary" to="/reviews">
          Reviews
        </Link>
      </li>

      <li>
        <Link className="font-semibold text-primary" to="/myportfolio">
          My Portfolio
        </Link>
      </li>
      <li>
        <Link className="font-semibold text-primary" to="/blogs">
          Blogs
        </Link>
      </li>
      <li>
        {user ? (
          <div className="flex flex-col">
            <p className="font-semibold text-primary">{user.displayName}</p>
            <button className="font-semibold text-primary" onClick={logout}>
              Sign Out
            </button>
          </div>
        ) : (
          <Link className="font-semibold text-primary" to="/login">
            Login
          </Link>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar bg-secondary">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-primary lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case text-2xl font-bold text-base-200 hidden md:flex lg:flex"
        >
          Jack Hammer Corporation
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex mx-auto">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end lg:hidden">
        <label
          htmlFor="dashboard-drawer"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Sidebar
        </label>
      </div>
    </div>
  );
};

export default Navbar;
