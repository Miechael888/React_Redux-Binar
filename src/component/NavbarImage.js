import React from "react";
import { useSelector } from "react-redux";

const NavbarImage = () => {
  const imageNavbar = useSelector((state) => state);

  return (
    <div>
      <img src={imageNavbar.data.avatar} />
    </div>
  );
};

export default NavbarImage;
