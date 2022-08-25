import React from "react";
import { useSelector } from "react-redux";

const CardName = () => {
  const nameCard = useSelector((state) => state);

  return (
    <div>
      <h1>{nameCard.data.name}</h1>
    </div>
  );
};

export default CardName;
