import React from "react";
import { AiOutlineDownload, AiOutlineLink } from "react-icons/ai";

function SegmentedButtonText(props) {
  return (
    <button onClick={props.onClick}>
      <div>
        <p
          className={`${
            props.selected ? "text-yellow-500" : "text-white"
          } text-base mx-1.5 `}
        >
          {props.name}
        </p>
      </div>
    </button>
  );
}

function SegmentedButtonIcon(props) {
  return (
    <button onClick={props.onClick}>
      <div>
        {props.icon === "download" ? (
          <AiOutlineDownload className="flex" size={24} color={"white"} />
        ) : (
          <AiOutlineLink className="flex" size={24} color={"white"} />
        )}{" "}
      </div>
    </button>
  );
}

export { SegmentedButtonText, SegmentedButtonIcon };
