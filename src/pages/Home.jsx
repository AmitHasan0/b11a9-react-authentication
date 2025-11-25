import React from "react";
import Trending from "../components/Trending";
import Education from "../components/Education";
import Productivity from "../components/Productivity";
import Gaming from "../components/Gaming";
import trend from "../assets/fire.png";
import edu from "../assets/edu.png";
import pro from "../assets/pro.png";
import game from "../assets/game.png";
import { Link, useLoaderData } from "react-router";
import AppCard from "../components/AppCard";
import Marquee from "react-fast-marquee";
import Header from "../components/Header";

const Home = () => {
  const apps = useLoaderData();

  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="mb-40">
        {/* Trending Section */}
        <section className="bg-blue-50">
          <div className="lg:mt-16 mt-10 lg:mb-10 mb-6 group inline-block p-2 bg-blue-100 rounded-xl ml-2 lg:ml-6">
            <h2 className="heading-style">
              Trending Apps <img className="w-8 ml-2" src={trend} alt="" />
            </h2>

            <div className="heading-underline"></div>
          </div>

          <Trending></Trending>
        </section>

        {/* Education Section */}
        <section className="bg-blue-50">
          <div className="lg:mt-16 mt-10 lg:mb-10 mb-6 group inline-block p-2 bg-blue-100 rounded-xl ml-2 lg:ml-6">
            <h2 className="heading-style">
              Education Apps <img className="w-8 ml-2" src={edu} alt="" />
            </h2>
            <div className="heading-underline"></div>
          </div>
          <Education></Education>
        </section>
        {/* Productivity Section */}
        <section className="bg-blue-50">
          <div className="lg:mt-16 mt-10 lg:mb-10 mb-6 group inline-block p-2 bg-blue-100 rounded-xl ml-2 lg:ml-6">
            <h2 className="heading-style">
              Productivity Apps <img className="w-8 ml-2" src={pro} alt="" />
            </h2>
            <div className="heading-underline"></div>
          </div>
          <Productivity></Productivity>
        </section>
        {/* Gaming Section */}
        <section className="bg-blue-50">
          <div className="lg:mt-16 mt-10 lg:mb-10 mb-6 group inline-block p-2 bg-blue-100 rounded-xl ml-2 lg:ml-6">
            <h2 className="heading-style">
              Gaming Apps <img className="w-8 ml-2" src={game} alt="" />
            </h2>
            <div className="heading-underline"></div>
          </div>
          <Gaming></Gaming>
        </section>
        {/* My Section */}
        <section>
          <div className="py-16 flex justify-center items-center group">
            <h2 className="text-3xl font-bold mb-1 hover:text-blue-500 transition-colors duration-200 inline-block  rounded-2xl">
              Top Picks For You
              <div className="heading-underline"></div>
            </h2>
          </div>
          <p className="text-center font-semibold text-xl tracking-widest mb-5">
            Based On Top Three Categories
          </p>
          <div className="bg-blue-100">
            <Marquee
              gradient={true}
              gradientColor="white"
              gradientWidth={50}
              speed={75}
              pauseOnHover={true}
              className="gap-6"
            >
              <div className="flex py-10 gap-6">
                {apps
                  .filter((app) => app.rating > 4.5 && app.downloads > 2000000)
                  .map((app) => (
                    <AppCard key={app.id} app={app} />
                  ))}
              </div>
            </Marquee>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
