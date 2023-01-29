import React from "react";

function SegmentedControl(props) {
  return (
    <div className="flex flex-row bg-dark-blue rounded-lg p-2 mr-2">
      {props.children}
    </div>
  );
}

export default SegmentedControl;
