import React from "react";
import { IoIosArrowDown } from "react-icons/io";

function TermDropdown(props) {
  return (
    <div className="flex flex-row items-center justify-between bg-dark-blue p-2 rounded-lg w-full mb-2">
      <p className=" text-white">{props.term}</p>
      <IoIosArrowDown color="white" size={24}/>
    </div>
  );
}

export default TermDropdown;
