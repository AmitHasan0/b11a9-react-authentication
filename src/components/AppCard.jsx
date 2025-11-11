import React from "react";
import { RxStarFilled } from "react-icons/rx";

const AppCard = ({ app }) => {
  const { name, thumbnail, downloads, rating } = app;

  return (
    <div
      className="
        group
        flex flex-col items-center justify-between
        rounded-3xl 
        bg-blue-50 
        border border-blue-200
        shadow-2xl
        hover:shadow-[0_8px_28px_rgba(0,0,0,0.12)]
        hover:border-blue-400
        transition-all duration-300 ease-out
        p-5 mx-6 
        transform hover:scale-105 hover:-translate-y-2
      "
    >
      <div
        className="
          border border-blue-300/60
          rounded-2xl p-6 
          shadow-inner 
          bg-linear-to-b from-white/80 to-blue-50/80
          group-hover:from-blue-50 group-hover:to-blue-100
          transition-all duration-300
          w-full flex flex-col items-center
        "
      >
        <img
          className="
            w-20 h-20 sm:w-24 sm:h-24
            object-cover rounded-2xl 
            border border-blue-300 
            shadow-lg
            group-hover:shadow-blue-400/40
            transition-all duration-300
          "
          src={thumbnail}
          alt={logo}
          loading="lazy"
        />

        <div className="flex flex-col items-center gap-2 mt-4">
          <h2
            className="
              text-base sm:text-lg 
              font-semibold text-gray-800
              group-hover:text-blue-600
              transition-all duration-200
              truncate w-28 sm:w-36 text-center
            "
          >
            {name}
          </h2>

          <div className="flex items-center justify-center gap-1 text-sm text-gray-600">
            <span className="font-medium">{rating}</span>
            <RxStarFilled
              className="
                text-yellow-400 
                group-hover:text-yellow-500 
                transition-all duration-200
              "
              size={18}
            />
          </div>

          <p className="text-xs text-gray-600">
            <span className="font-semibold text-gray-700">Downloads:</span>{" "}
            {downloads}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
