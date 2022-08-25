import React from "react";
import { useSelector } from "react-redux";

const CardImage = () => {
  const imageCard = useSelector((state) => state);
  return (
    <div>
      <img src={imageCard.data.avatar} />
    </div>
  );
};

export default CardImage;
