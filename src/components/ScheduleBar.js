import React from "react";
import SegmentedControl from "./SegmentedControl";

function ScheduleBar() {
  return (
    <div className="flex w-1/2 ml-2 mr-1 bg-inner-background rounded-lg p-2 items-center justify-between">
      <div className="flex flex-row items-center">
        <SegmentedControl
          values={[
            { name: "Schedule", selected: true },
            { name: "Finals", selected: false },
          ]}
        />
        ˝
        <SegmentedControl values={[{ name: "Class List", selected: false }]} />˝
      </div>
      <div className="flex flex-row items-center">
        <SegmentedControl
          values={[{ name: "", type: "download", selected: false }]}
        />
        <SegmentedControl
          values={[{ name: "", type: "link", selected: false }]}
        />
        <p>12 units</p>
      </div>
    </div>
  );
}

export default ScheduleBar;
