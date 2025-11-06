import React from "react";

const AppCard = ({ app }) => {
  const { name, thumbnail, downloads, rating } = app;
  console.log(thumbnail);
  //   console.log(app);
  return (
    <div className="flex gap-5">
      <img className="w-20" src={thumbnail} alt="" />
      <div>
        <h3>{name}</h3>
        <p>{downloads}</p>
        <p>{rating}</p>
      </div>
    </div>
  );
};

export default AppCard;
