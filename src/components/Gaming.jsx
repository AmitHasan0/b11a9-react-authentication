import React from "react";
import { useLoaderData } from "react-router";
import AppCard from "./AppCard";

const Gaming = () => {
  const apps = useLoaderData();
  return (
    <div className="carousel w-full lg:py-10 py-4 bg-blue-100 lg:rounded-xl rounded-3xl">
      {apps
        .filter((app) => app.category == "Gaming")
        .map((app) => (
          <div key={app.id} className="carousel-style">
            <AppCard app={app} />
          </div>
        ))}
    </div>
  );
};

export default Gaming;
