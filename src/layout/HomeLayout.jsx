import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet, useNavigation } from "react-router";
import Loading from "../pages/Loading";

const HomeLayout = () => {
  useEffect(() => {
    document.title = "App Store";
  }, []);
  const { state } = useNavigation();
  return (
    <div className="w-11/12 mx-auto">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 shadow-md">
        <Navbar />
      </nav>
      {/* Header */}

      <section>
        {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>}
      </section>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
