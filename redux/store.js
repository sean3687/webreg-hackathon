import { createStore } from "redux";

const IntheCalander = {
    course:[
        {}
    ]
}

const IntheBag = {
  courses: [
    {
      id: 27635,
      departmentName: "AC ENG",
      courseLevel: "20",
      type: "lec",
      pass:false,
      waitlist:false,
      opacity:0.8
    },
    {
      id: 26352,
      departmentName: "ENGR",
      courseLevel: "70",
      type: "lab",
      pass:false,
      waitlist:false,
      opacity:0.8
    },
    {
      id: 27364,
      departmentName: "ENGR",
      courseLevel: "70",
      type: "dis",
      pass:false,
      waitlist:false,
      opacity:0.8
    },
  ],
};

const store = createStore(reducer);

export default function reducer(
  prevData = [
    {
      bag: IntheBag,
      calander: IntheCalander,
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
      return newData
    case "RemoveFromBag":
        //decrease unitsapplied
        // update in the bag,
       
      return newData
    case "EnrollEverything":
        //remove ghosting : change opacity to 1
        
        return newData
    case "PassToggle":
        //
      return newData;
    case "WaitlistToggle":
      return newData;
    
    default:
      return prevData;
  }
}
