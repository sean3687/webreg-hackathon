import React from "react";
import { AiOutlineSearch, AiOutlineCheckCircle } from "react-icons/ai";
import { BsFilterRight } from "react-icons/bs";

function ClassSearchbar() {
  return (
    <div className="flex flex-row items-center">
      <div className="flex flex-row justify-between w-full border-light-gray border-b-2 mr-2 pb-1 px-1">
        <input
          type="search"
          className="text-light-gray bg-transparent w-full outline-none"
          placeholder="Class Search"
        />
        <AiOutlineSearch className="text-light-gray" size={24} />
      </div>
    </div>
  );
}

export default ClassSearchbar;
