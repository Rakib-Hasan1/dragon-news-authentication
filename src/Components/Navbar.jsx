import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import { AuthContext } from "../ContextProvider/FirebaseAuthProvider";

const Navbar = () => {
  const { user, logout } = use(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        alert("User Logout Successfully");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="flex items-center justify-between mb-16">
      <div className="">{user && user.email} </div>
      <div className="flex gap-4 text-accent">
        <NavLink className="px-3 py-2 rounded-sm" to="/">
          Home
        </NavLink>
        <NavLink className="px-3 py-2 rounded-sm" to="/about">
          About
        </NavLink>
        <NavLink className="px-3 py-2 rounded-sm" to="/career">
          Career
        </NavLink>
      </div>
      <div className="flex gap-3">
        <img
          className="w-10 h-10 rounded-full object-cover cursor-pointer"
          src={user ? user.photoURL : userImg}
          alt=""
        />

        {user ? (
          <Link
            onClick={handleLogout}
            to="/auth/login"
            className="btn btn-primary px-10 text-base-100"
          >
            Logout
          </Link>
        ) : (
          <Link
            to="/auth/login"
            className="btn btn-primary px-10 text-base-100"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
