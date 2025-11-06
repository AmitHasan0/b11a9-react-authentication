import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, useLoaderData } from "react-router";
import Header from "../components/Header";
import AppCard from "../components/AppCard";

const HomeLayout = () => {
  const apps = useLoaderData();
  // console.log(apps);
  return (
    <div className="w-11/12 mx-auto">
      <header>
        <Navbar></Navbar>
        <Header></Header>
      </header>
      <main>
        <Outlet></Outlet>
        <h2
          className="text-2xl font-bold
"
        >
          Trending Apps
        </h2>
        <div className="grid lg:grid-cols-4 gap-5">
          {apps.map((app) => (
            <AppCard app={app} key={app.id}></AppCard>
          ))}
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default HomeLayout;
