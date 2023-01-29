import React from "react";
import background from "../assets/imgs/waves.png";
import logo from "../assets/imgs/WebReg.svg";

function Banner() {
  return (
    <div className="flex h-32 items-center justify-center">
      <img className="w-screen h-32" src={background}></img>
      <img className="absolute" src={logo} />
    </div>
  );
}

export default Banner;
