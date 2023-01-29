import { createStore } from "redux";

const IntheStudyList = {
  courses: [
    {
      id: 62836,
      departmentName: "ENG",
      courseLevel: "7B",
      type: "LEC",
      pass: false,
      waitlist: false,
      units: 4,
      location: "SSL 78",
      Instructor: "Serate, K.",
      day: [0, 2, 4],
      time: [8, 10],
      opacity: 1,
    },
    {
      id: 62837,
      departmentName: "ENGR",
      courseLevel: "70",
      type: "DIS",
      pass: false,
      waitlist: false,
      units: 1,
      location: "SSL 78",
      Instructor: "Serate, K.",
      day: [2],
      time: [10, 11],
      opacity: 1,
    },
    {
      id: 72836,
      departmentName: "CHEM",
      courseLevel: "2B",
      type: "LEC",
      pass: false,
      waitlist: false,
      units: 4,
      location: "SSL 78",
      Instructor: "Serate, K.",
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
      Instructor: "Serate, K.",
      day: [2],
      time: [10, 11],
      opacity: 1,
    },
    {
      id: 22836,
      departmentName: "MATH",
      courseLevel: "2B",
      type: "LEC",
      pass: false,
      waitlist: true,
      location: "SSL 78",
      Instructor: "Serate, K.",
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
      Instructor: "Serate, K.",
      day: [3],
      time: [13, 14],
      opacity: 1,
    },
  ],
};

const IntheBag = {
  courses: [
    {
      id: 26352,
      departmentName: "ENGR",
      courseLevel: "70",
      type: "LAB",
      pass: false,
      waitlist: false,
      units: 2,
      location: "SSL 78",
      Instructor: "Serate, K.",
      day: [4],
      time: [8,11],
      opacity: 1,
    },
  ],
};

export default function reducer(
  prevData = [
    {
      bag: IntheBag,
      calander: IntheStudyList,
      unitsApplied: 0,
      unitsInBag: 0,
    },
  ],
  action
) {
  let newData = [...prevData];

  switch (action.type) {
    case "AddToBag":
      //incease unitsapplied
      // update in the bag
      // ghosting on calander :change opacity to 0.8
      return newData;
    case "RemoveFromBag":
      //decrease unitsapplied
      // update in the bag,

      return newData;
    case "EnrollEverything":
      //remove ghosting : change opacity to 1

      return newData;
    case "PassToggle":
      //
      return newData;
    case "WaitlistToggle":
      return newData;

    default:
      return prevData;
  }
}
