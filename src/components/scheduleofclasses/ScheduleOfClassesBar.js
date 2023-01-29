import React, { useState } from "react";
import SegmentedControl from "../segemented/SegmentedControl";
import { MdOutlineBackpack } from "react-icons/md";
import { SegmentedButtonText } from "../segemented/SegmentedButton";

function ScheduleOfClassesBar(props) {
  return (
    <div className="flex w-1/2 ml-2 mr-1 bg-inner-background rounded-lg p-2 items-center justify-between">
      <div className="flex flex-row items-center">
        <SegmentedControl>
          <SegmentedButtonText
            name="Class Search"
            selected={props.classSearchSelected}
            onClick={() => {
              props.setMapSelected(false);
              props.setClassSearchSelected(true);
            }}
          />
          <SegmentedButtonText
            name="Map"
            selected={props.mapSelected}
            onClick={() => {
              props.setClassSearchSelected(false);
              props.setMapSelected(true);
            }}
          />
        </SegmentedControl>
        ˝
      </div>
      <div className="flex flex-row items-center">
        <MdOutlineBackpack size={32} />
      </div>
    </div>
  );
}

export default ScheduleOfClassesBar;
