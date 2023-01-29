import React, { useState } from "react";
import {
  SegmentedButtonIcon,
  SegmentedButtonText,
} from "../segemented/SegmentedButton";
import SegmentedControl from "../segemented/SegmentedControl";

function ScheduleBar(props) {
  return (
    <div className="flex w-1/2 ml-2 mr-1 bg-inner-background rounded-lg p-2 items-center justify-between">
      <div className="flex flex-row items-center">
        <SegmentedControl states={[props.calendarSelected, props.listSelected]}>
          <SegmentedButtonText
            name="Calendar"
            selected={props.calendarSelected}
            onClick={() => {
              props.setFinalsSelected(false);
              props.setListSelected(false);
              props.setCalendarSelected(true);
            }}
          />
          <SegmentedButtonText
            name="List"
            selected={props.listSelected}
            onClick={() => {
              props.setFinalsSelected(false);
              props.setCalendarSelected(false);
              props.setListSelected(true);
            }}
          />
        </SegmentedControl>
        ˝
        <SegmentedControl states={[props.finalsSelected]}>
          <SegmentedButtonText
            name="Finals"
            selected={props.finalsSelected}
            onClick={() => {
              props.setCalendarSelected(false);
              props.setListSelected(false);
              props.setFinalsSelected(true);
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
