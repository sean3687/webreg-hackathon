import React, { useState } from "react";
import {
  SegmentedButtonIcon,
  SegmentedButtonText,
} from "../segemented/SegmentedButton";
import SegmentedControl from "../segemented/SegmentedControl";

function ScheduleBar() {
  const [calendarSelected, setCalendarSelected] = useState(true);
  const [listSelected, setListSelected] = useState(false);

  const [finalsSelected, setFinalsSelected] = useState(false);

  return (
    <div className="flex w-1/2 ml-2 mr-1 bg-inner-background rounded-lg p-2 items-center justify-between">
      <div className="flex flex-row items-center">
        <SegmentedControl states={[calendarSelected, listSelected]}>
          <SegmentedButtonText
            name="Calendar"
            selected={calendarSelected}
            onClick={() => {
              setFinalsSelected(false);
              setListSelected(false);
              setCalendarSelected(true);
            }}
          />
          <SegmentedButtonText
            name="List"
            selected={listSelected}
            onClick={() => {
              setFinalsSelected(false);
              setCalendarSelected(false);
              setListSelected(true);
            }}
          />
        </SegmentedControl>
        ˝
        <SegmentedControl states={[finalsSelected]}>
          <SegmentedButtonText
            name="Finals"
            selected={finalsSelected}
            onClick={() => {
              setCalendarSelected(false);
              setListSelected(false);
              setFinalsSelected(true);
            }}
          />
        </SegmentedControl>
      </div>
      <div className="flex flex-row items-center">
        <SegmentedControl>
          <SegmentedButtonIcon
            icon="download"
            onClick={() => alert("Downloaded Schedule")}
          />
        </SegmentedControl>
        <SegmentedControl>
          <SegmentedButtonIcon
            icon="link"
            onClick={() => alert("Link Copied")}
          />
        </SegmentedControl>
        <p>12 units</p>
      </div>
    </div>
  );
}

export default ScheduleBar;
