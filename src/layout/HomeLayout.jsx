import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, useLoaderData } from "react-router";
import Header from "../components/Header";
import AppCard from "../components/AppCard";
import Marquee from "react-fast-marquee";

const HomeLayout = () => {
  const apps = useLoaderData();

  return (
    <div className="w-11/12 mx-auto">
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      <Header />

      <main className="mb-40">
        <Outlet />

        {/* Trending Title */}
        <div className="mt-16 mb-10 group inline-block">
          <h2
            className="
      text-3xl font-extrabold text-gray-800 
      transition-colors duration-300 ease-out 
      group-hover:text-blue-600
    "
          >
            Trending Apps
          </h2>

          {/* Animated Underline */}
          <div
            className="
      h-1 w-0 
      bg-linear-to-r from-blue-500 to-blue-300  
      mt-1
      rounded-full
      transition-all duration-500 ease-in-out 
      group-hover:w-full
      shadow-2xl
    "
          ></div>
        </div>

        {/* Marquee Section */}
        <Marquee
          pauseOnHover={true}
          speed={35}
          gradient={true}
          gradientWidth={50}
        >
          <div className="flex gap-8 py-4">
            {apps
              .filter((app) => app.rating > 4.7)
              .map((app) => (
                <AppCard key={app.id} app={app} />
              ))}
          </div>
        </Marquee>
      </main>

      <footer></footer>
    </div>
  );
};

export default HomeLayout;
