import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import Home from "../pages/Home";

const HomeLayout = () => {
  return (
    <div className="w-11/12 mx-auto">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 shadow-md">
        <Navbar />
      </nav>

      {/* Header */}
      <header>
        <Header />
      </header>

      <Outlet></Outlet>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
