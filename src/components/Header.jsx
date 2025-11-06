import React from "react";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";

const Header = () => {
  return (
    <div className="carousel w-full rounded-xl">
      {/* -------- Slide 1 -------- */}
      <div id="slide1" className="carousel-item relative w-full">
        <div className="w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden relative">
          <img
            src={slide1}
            alt="Slide 1"
            className="w-full h-full object-cover object-center block"
          />
        </div>

        {/* Arrows */}
        <div className="absolute left-3 right-3 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle btn-sm sm:btn-md">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle btn-sm sm:btn-md">
            ❯
          </a>
        </div>
      </div>

      {/* -------- Slide 2 -------- */}
      <div id="slide2" className="carousel-item relative w-full">
        <div className="w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden relative">
          <img
            src={slide2}
            alt="Slide 2"
            className="w-full h-full object-cover object-center block"
          />
        </div>
        <div className="absolute left-3 right-3 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle btn-sm sm:btn-md">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle btn-sm sm:btn-md">
            ❯
          </a>
        </div>
      </div>

      {/* -------- Slide 3 -------- */}
      <div id="slide3" className="carousel-item relative w-full">
        <div className="w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden relative">
          <img
            src={slide3}
            alt="Slide 3"
            className="w-full h-full object-cover object-center block"
          />
        </div>
        <div className="absolute left-3 right-3 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle btn-sm sm:btn-md">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle btn-sm sm:btn-md">
            ❯
          </a>
        </div>
      </div>

      {/* -------- Slide 4 -------- */}
      <div id="slide4" className="carousel-item relative w-full">
        <div className="w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden relative">
          <img
            src={slide4}
            alt="Slide 4"
            className="w-full h-full object-cover object-center block"
          />
        </div>
        <div className="absolute left-3 right-3 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle btn-sm sm:btn-md">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle btn-sm sm:btn-md">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
