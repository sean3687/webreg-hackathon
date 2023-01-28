import React from "react";
import logo from "../assets/imgs/uci-logo.png";
import { AiOutlineUser } from "react-icons/ai";

function Header() {
  return (
    <div className="flex flex-row w-full justify-between items-center py-2">
      <img src={logo} className="flex w-24" />
      <AiOutlineUser className="flex" size={42} />
    </div>
  );
}

export default Header;
