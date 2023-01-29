import React from "react";

function ClassListRow(props) {
  console.log(props);
  return (
    <div
      className={`${props.last ? "rounded-b-lg" : null} ${
        props.last ? "bg-[#C2C2C2]" : "bg-[#D9D9D9]"
      }  flex flex-row  justify-between p-2`}
    >
      <p className="w-[7%]">{props.id}</p>
      <p className="w-[4%]">{props.type}</p>
      <p className="w-[8%]">{props.units + " Units"}</p>
      <p className="w-[20%]">{props.instructor}</p>
      <p className="w-[15%]">{props.day}</p>
      <p className="w-[10%]">{props.location}</p>
      <p className="w-[10%]">{"100/150"}</p>
    </div>
  );
}

export default ClassListRow;
