import React from "react";
import ClassListGroup from "./list-view/ClassListGroup";
import ClassListRow from "./list-view/ClassListRow";

const waitlist = [
  [
    {
      id: 62836,
      departmentName: "ENG",
      courseLevel: "7B",
      type: "LEC",
      pass: false,
      waitlist: false,
      units: 4,
      location: "SSL 78",
      instructor: "Serate, K.",
      day: [0, 2, 4],
      time: [8, 10],
      opacity: 1,
    },
    {
      id: 62837,
      departmentName: "ENGR",
      courseLevel: "7B",
      type: "DIS",
      pass: false,
      waitlist: false,
      units: 1,
      location: "SSL 78",
      instructor: "Serate, K.",
      day: [2],
      time: [10, 11],
      opacity: 1,
    },
  ],
];

const enrolled = [
  [
    {
      id: 62836,
      departmentName: "ENG",
      courseLevel: "7B",
      type: "LEC",
      pass: false,
      waitlist: false,
      units: 4,
      location: "SSL 78",
      instructor: "Serate, K.",
      day: [0, 2, 4],
      time: [8, 10],
      opacity: 1,
    },
    {
      id: 62837,
      departmentName: "ENGR",
      courseLevel: "7B",
      type: "DIS",
      pass: false,
      waitlist: false,
      units: 1,
      location: "SSL 78",
      instructor: "Serate, K.",
      day: [2],
      time: [10, 11],
      opacity: 1,
    },
  ],
  [
    {
      id: 72836,
      departmentName: "CHEM",
      courseLevel: "2B",
      type: "LEC",
      pass: false,
      waitlist: false,
      units: 4,
      location: "SSL 78",
      instructor: "Serate, K.",
      day: [0, 2, 4],
      time: [10, 11],
      opacity: 1,
    },
    {
      id: 72837,
      departmentName: "CHEM",
      courseLevel: "2B",
      type: "DIS",
      pass: false,
      waitlist: false,
      units: 1,
      location: "SSL 78",
      instructor: "Serate, K.",
      day: [2],
      time: [10, 11],
      opacity: 1,
    },
  ],
  [
    {
      id: 22836,
      departmentName: "MATH",
      courseLevel: "2B",
      type: "LEC",
      pass: false,
      waitlist: true,
      location: "SSL 78",
      instructor: "Serate, K.",
      units: 4,
      day: [1, 3],
      time: [15, 16],
      opacity: 1,
    },
    {
      id: 22837,
      departmentName: "MATH",
      courseLevel: "2B",
      type: "DIS",
      pass: false,
      waitlist: true,
      units: 1,
      location: "SSL 78",
      instructor: "Serate, K.",
      day: [3],
      time: [13, 14],
      opacity: 1,
    },
  ],
];
function Schedule(props) {
  return (
    <div className="flex w-1/2 h-full ml-2 mr-1">
      {props.calendarSelected ? <div>calendar</div> : null}
      {props.listSelected ? (
        <div id="list-container" className="w-full p-2 overflow-y-scroll ">
          <p className="font-bold text-xl text-[#0D2441] mb-2">Schedule</p>
          {enrolled.map((group) => (
            <ClassListGroup
              name={group[0].departmentName + " " + group[0].courseLevel}
            >
              <ClassListRow {...group[0]} />
              <ClassListRow {...group[1]} last />
            </ClassListGroup>
          ))}
          <div className="bg-selected w-full h-1 rounded-lg mb-2"></div>
          <p className="font-bold text-xl text-[#0D2441] mb-2">Waitlist</p>
          {waitlist.map((group) => (
            <ClassListGroup
              name={group[0].departmentName + " " + group[0].courseLevel}
            >
              <ClassListRow {...group[0]} />
              <ClassListRow {...group[1]} last />
            </ClassListGroup>
          ))}
        </div>
      ) : null}
      {props.finalsSelected ? <div>final</div> : null}
    </div>
  );
}

export default Schedule;
