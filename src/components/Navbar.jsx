import React from "react";
import logo from "../assets/logo.png";
import { Link, NavLink, useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="navbar bg-white shadow-sm px-4">
      {/* Left: Logo */}
      <div
        onClick={handleClick}
        className="navbar-start cursor-pointer flex items-center gap-2 group"
      >
        <img
          className="lg:w-10 w-8 duration-200 group-hover:scale-110"
          src={logo}
          alt="AppStore logo"
        />
        <h1 className="lg:text-2xl text-xl font-extrabold text-primary">
          <span className="text-secondary">App</span>Store
        </h1>
      </div>

      {/* Center: Nav Items */}
      <div className="navbar-center hidden lg:flex gap-10 text-gray-500 font-medium">
        <NavLink to="/categories">
          <span>Categories</span>
        </NavLink>

        <NavLink to="/profile">
          <span>Profile</span>
        </NavLink>
      </div>

      {/* Right: Login Button */}
      <div className="navbar-end">
        <Link
          className="
            btn bg-blue-600 border-none text-white 
            hover:bg-blue-800 transition-all duration-300
            rounded-full px-6
          "
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
