import React, { use } from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import guest from "../assets/userIcon.png";
const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: "error",
          title: "Logged Out Successfully!",
          timer: 1500,
          showConfirmButton: false,
        }).then(() => {
          navigate("/");
        });
      })
      .catch((error) => {
        // console.log(error);
      });
  };
  return (
    <div className="navbar bg-white shadow-sm px-4">
      {/* Left: Logo */}
      <Link
        to="/"
        className="navbar-start cursor-pointer items-center gap-2 group"
      >
        <img
          className="lg:w-10 w-8 duration-200 group-hover:scale-110"
          src={logo}
          alt="AppStore logo"
        />
        <h1 className="lg:text-2xl text-xl font-extrabold text-primary">
          <span className="text-secondary">App</span>Store
        </h1>
      </Link>

      {/* Center: Nav Items */}
      <div className="navbar-center hidden lg:flex gap-10 text-gray-500 font-medium">
        <NavLink to="/categories/allApps">
          <span className="hover:text-blue-600">Apps</span>
        </NavLink>

        <NavLink to="/profile">
          <span className="hover:text-blue-600">Profile</span>
        </NavLink>
      </div>

      {/* Right: Login Button */}
      <div className="navbar-end">
        <div className="relative group cursor-pointer">
          <img
            className="mr-2 w-12 h-12 rounded-full"
            src={user ? user.photoURL : guest}
            alt="avatar"
          />

          {/* Tooltip */}
          <span
            className="absolute top-8  mt-2 px-2 py-1 
               bg-gray-800 text-white text-xs whitespace-nowrap rounded-full
               opacity-0 group-hover:opacity-50
               transition-all duration-200"
          >
            {user ? user.displayName : "Guest"}
          </span>
        </div>

        {user ? (
          <button
            onClick={handleLogOut}
            className="btn btn-primary hover:bg-blue-800 px-6 rounded-lg"
          >
            LogOut
          </button>
        ) : (
          <Link
            to="/auth/login"
            className="btn btn-primary hover:bg-blue-800 px-6 rounded-lg"
          >
            LogIn
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
