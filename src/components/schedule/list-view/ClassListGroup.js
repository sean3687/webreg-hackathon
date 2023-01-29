import React from "react";

function ClassListGroup(props) {
  return (
    <div className="flex flex-col rounded-lg mb-4">
      <div className="bg-course-group-blue rounded-t-lg p-2">
        <p className="text-white font-semibold">{props.name}</p>
      </div>
      <div className="rounded-b-lg">{props.children}</div>
    </div>
  );
}

export default ClassListGroup;
