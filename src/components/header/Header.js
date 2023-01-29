import React, { useState } from "react";
import logo from "../../assets/imgs/uci-logo.png";
import { AiOutlineUser } from "react-icons/ai";
import UserCard from "./UserCard";

function Header() {
  const [showProfileInfo, setShowProfileInfo] = useState(false);
  const toggleProfileInfo = () => {
    setShowProfileInfo(!showProfileInfo);
  };
  return (
    <div className="flex flex-row w-full justify-between items-center px-2 pt-2 pb-1 bg-white">
      <img src={logo} className="flex w-12" alt="UCI Logo" />
      <button onClick={toggleProfileInfo} className="p-1">
        <AiOutlineUser className="flex" size={28} />
      </button>
      {showProfileInfo ? (
        <div className="absolute top-10 right-2 bg-dark-gray w-1/4 h-1/3 rounded-lg p-2 mt-3">
          <UserCard
            name="Timothy Ngo"
            id="1234567"
            standing="Senior"
            units="109"
            feeStatus={false}
          />
        </div>
      ) : null}
    </div>
  );
}

export default Header;
