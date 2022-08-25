import React from "react";
import CardImage from "./CardImage";
import CardName from "./CardName";
import { useState } from "react";
import { useSelector } from "react-redux";

const Card = () => {
  return (
    <div>
      <CardName />
      <CardImage />
    </div>
  );
};

export default Card;
