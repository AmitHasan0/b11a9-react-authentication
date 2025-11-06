import React from "react";
import logo from "../assets/logo.png";
import { Link, NavLink, useNavigate } from "react-router";
const Navbar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="navbar bg-base-100">
      <div onClick={handleClick} className="navbar-start cursor-pointer">
        <img className="lg:w-10 w-8" src={logo} alt="" />
        <h1 className="lg:text-2xl text-xl font-extrabold text-primary">
          {" "}
          <span className="text-secondary">App</span>Store
        </h1>
      </div>

      <div className="navbar-center hidden lg:flex gap-10 text-gray-400">
        <NavLink to="/categories">Categories</NavLink>
        <NavLink to="/profile">My Profile</NavLink>
      </div>

      <div className="navbar-end">
        <Link className="btn btn-secondary">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
