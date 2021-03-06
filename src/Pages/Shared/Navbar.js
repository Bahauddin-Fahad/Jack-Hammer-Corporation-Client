import { signOut } from "firebase/auth";
import React from "react";
import { HiMenuAlt1, HiOutlineDotsVertical } from "react-icons/hi";
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

      <div className="flex flex-col items-center">
        {user && (
          <p className="font-semibold text-primary">{user.displayName}</p>
        )}
        <li>
          {user ? (
            <button className="font-semibold text-primary" onClick={logout}>
              Sign Out
            </button>
          ) : (
            <Link className="font-semibold text-primary" to="/login">
              Login
            </Link>
          )}
        </li>
      </div>
    </>
  );
  return (
    <div className="navbar bg-secondary">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-primary lg:hidden">
            <HiMenuAlt1 className="h-6 w-6" />
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
          className="btn btn-ghost normal-case text-2xl font-bold text-base-200 hidden sm:flex md:flex lg:flex"
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
          <HiOutlineDotsVertical />
        </label>
      </div>
    </div>
  );
};

export default Navbar;
