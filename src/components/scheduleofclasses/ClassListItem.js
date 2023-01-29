import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import Checkbox from "@mui/material/Checkbox";

function ClassListItem(props) {
  const [checked, setChecked] = useState(false);
  const days = () => {
    const conversion = ["Su", "M", "Tu", "W", "Th", "F", "Sa"];
    if (props.day.length === 1) {
      return conversion[props.day[0]];
    }
    let res = "";
    for (let x = 0; x < props.day.length; x++) {
      if (x === props.day.length - 1) {
        res += conversion[props.day[x]];
      } else {
        res += conversion[props.day[x]] + ", ";
      }
    }
    return res;
  };
  const times = () => {};
  return props.simplified ? (
    <div
      className={`flex flex-row w-full justify-between items-center bg-[#B5B4B4] p-3 rounded-lg mb-2`}
    >
      <div className="flex flex-row w-2/3 items-center">
        <p className="w-[10%] mr-2">{props.id}</p>
        <p className="w-[20%] mr-2 font-semibold">
          {props.departmentName + " " + props.courseLevel}
        </p>
        <p className="w-[10%] mr-2 font-semibold">{props.type}</p>
      </div>
      <div className="flex flex-row w-1/6 justify-between items-center">
        <p className="bg-transparent">PASS/FAIL</p>
        <Checkbox color="success" />
        <BsTrash size={20} className="mr-2"/>
      </div>
    </div>
  ) : (
    <div
      className={`flex flex-row w-full justify-between items-center ${
        props.idx % 2 !== 0 ? "bg-[#C7C7C7]" : null
      } px-3`}
    >
      <AiOutlinePlus size={20} className="w-[5%] " />
      <p className="w-[7%] ">{props.id}</p>
      <p className="w-[5%]">{props.type}</p>
      <p className="w-[20%]">{props.instructor}</p>
      <div className={"flex flex-col  w-[20%]"}>
        <p className="">{days()}</p>
        <p className="">{props.time}</p>
      </div>
      <p className="w-[10%]">{props.location}</p>
      <p className="w-[10%]">255/255</p>
      <p className="w-[7%]">Empty</p>
    </div>
  );
}

export default ClassListItem;
