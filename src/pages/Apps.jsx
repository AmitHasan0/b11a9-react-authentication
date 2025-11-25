import React from "react";
import AppCard from "../components/AppCard";
import { useLoaderData } from "react-router";

const Apps = () => {
  const apps = useLoaderData();
  console.log(apps);
  return (
    <div>
      <h2 className="font-bold text-4xl text-center  my-10">
        <span className="inline-block hover:text-blue-500 transition-colors">
          {" "}
          All Apps Are Here!
        </span>
      </h2>
      <div className="carousel w-full lg:py-10 py-4 bg-blue-100 lg:rounded-xl rounded-3xl my-10">
        {apps.map((app) => (
          <div key={app.id} className="carousel-style">
            <AppCard app={app} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;
