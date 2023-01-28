import React from "react";
import { AiOutlineDownload, AiOutlineLink } from "react-icons/ai";

function SegmentedControl(props) {
  return (
    <div className="flex flex-row bg-dark-blue rounded-lg p-2 mr-2">
      {props.values.map((value) =>
        value.type == "download" ? (
          <AiOutlineDownload className="flex" size={24} color={"white"} />
        ) : value.type == "link" ? (
          <AiOutlineLink className="flex" size={24} color={"white"} />
        ) : (
          <p
            className={`${
              value.selected ? "text-yellow-500" : "text-white"
            } text-base mx-1.5 `}
          >
            {value.name}
          </p>
        )
      )}
    </div>
  );
}

export default SegmentedControl;
