import React from "react";
import { useLoaderData } from "react-router";
import AppCard from "./AppCard";

const Trending = () => {
  const apps = useLoaderData();
  console.log(apps);
  return (
    <div className="carousel w-full lg:py-10 py-4 bg-blue-100 lg:rounded-xl rounded-3xl">
      {apps
        .filter((app) => app.rating > 4.7)
        .map((app) => (
          <div key={app.id} className="carousel-style">
            <AppCard app={app} />
          </div>
        ))}
    </div>
  );
};

export default Trending;
