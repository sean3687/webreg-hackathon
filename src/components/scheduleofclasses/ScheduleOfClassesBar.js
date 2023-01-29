import React, { useState } from "react";
import SegmentedControl from "../segemented/SegmentedControl";
import { MdOutlineBackpack } from "react-icons/md";
import { SegmentedButtonText } from "../segemented/SegmentedButton";

function ScheduleOfClassesBar() {
  const [classSearchSelected, setClassSearchSelected] = useState(true);
  const [mapSelected, setMapSelected] = useState(false);
  return (
    <div className="flex w-1/2 ml-2 mr-1 bg-inner-background rounded-lg p-2 items-center justify-between">
      <div className="flex flex-row items-center">
        <SegmentedControl>
          <SegmentedButtonText
            name="Class Search"
            selected={classSearchSelected}
            onClick={() => {
              setMapSelected(false);
              setClassSearchSelected(true);
            }}
          />
          <SegmentedButtonText
            name="Map"
            selected={mapSelected}
            onClick={() => {
              setClassSearchSelected(false);
              setMapSelected(true);
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
