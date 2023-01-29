import React from "react";
import SegmentedControl from "../SegmentedControl";
import { MdOutlineBackpack } from "react-icons/md";

function ScheduleOfClassesBar() {
  return (
    <div className="flex w-1/2 ml-2 mr-1 bg-inner-background rounded-lg p-2 items-center justify-between">
      <div className="flex flex-row items-center">
        <SegmentedControl
          values={[
            { name: "Class Search", selected: true },
            { name: "Map", selected: false },
          ]}
        />
        ˝
      </div>
      <div className="flex flex-row items-center">
        <MdOutlineBackpack
          size={32}
        />
      </div>
    </div>
  );
}

export default ScheduleOfClassesBar;
