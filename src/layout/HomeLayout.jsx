import React from "react";
import Navbar from "../components/Navbar";
import { useLoaderData } from "react-router";
import Header from "../components/Header";
import AppCard from "../components/AppCard";
import trend from "../assets/image.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HomeLayout = () => {
  const apps = useLoaderData();

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

      {/* Main Content */}
      <main className="mb-40 pl-5">
        {/* Trending Title */}
        <div className="lg:mt-16 mt-10 lg:mb-10 mb-6 group inline-block">
          <h2
            className="text-2xl flex justify-center items-center
            lg:text-3xl font-extrabold text-gray-800 
            transition-colors duration-300 ease-out 
            group-hover:text-blue-600"
          >
            Trending Apps <img className="w-8 ml-2" src={trend} alt="" />
          </h2>

          {/* Underline */}
          <div
            className="h-1 w-0 bg-linear-to-r from-blue-500 to-blue-300  
            mt-1 rounded-full transition-all duration-500 ease-in-out 
            group-hover:w-full shadow-2xl"
          ></div>
        </div>

        {/* Slider Section */}
        <div className="carousel w-full space-x-4 py-10">
          {apps
            .filter((app) => app.rating > 4.7)
            .map((app) => (
              <div
                key={app.id}
                className="carousel-item flex justify-center w-1/4"
              >
                <AppCard app={app} />
              </div>
            ))}
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default HomeLayout;
