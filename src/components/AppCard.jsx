import React from "react";

const AppCard = ({ app }) => {
  const { name, thumbnail, downloads, rating } = app;
  console.log(thumbnail);
  //   console.log(app);
  return (
    <div className="">
      <img
        className="w-16 h-16 rounded-md object-cover"
        src={thumbnail}
        alt={name}
      />

      <div className="">
        <h2 className="">{name}</h2>
        <p>{downloads}</p>
        <div className="">
          <p>{rating}</p>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
