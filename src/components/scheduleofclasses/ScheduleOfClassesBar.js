import React, { useState } from "react";
import SegmentedControl from "../segemented/SegmentedControl";
import { MdOutlineBackpack } from "react-icons/md";
import { SegmentedButtonText } from "../segemented/SegmentedButton";
import { IoIosArrowBack } from "react-icons/io";

import ClassListItem from "./ClassListItem";

const day = ["M", "T", "W", "T", "F", "S", "S"];
const IntheBag = [
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
    day: [2, 4],
    time: [8, 11],
    opacity: 1,
  },
  {
    id: 26458,
    departmentName: "MATH",
    courseLevel: "3A",
    type: "LEC",
    pass: false,
    waitlist: false,
    units: 2,
    location: "SSL 78",
    Instructor: "NAIR, S.",
    day: [2, 4],
    time: [8, 11],
    opacity: 1,
  },
];

function ScheduleOfClassesBar(props) {
  const [modalShow, setModalShow] = useState(false);
  const handleClick = () => {
    setModalShow(true);
  };

  return (
    <div className="flex w-1/2 ml-2 mr-1 bg-inner-background rounded-lg p-2 items-center justify-between">
      <div className="flex flex-row items-center">
        <SegmentedControl>
          <SegmentedButtonText
            name="Class Search"
            selected={props.classSearchSelected}
            onClick={() => {
              props.setMapSelected(false);
              props.setClassSearchSelected(true);
            }}
          />
          <SegmentedButtonText
            name="Map"
            selected={props.mapSelected}
            onClick={() => {
              props.setClassSearchSelected(false);
              props.setMapSelected(true);
            }}
          />
        </SegmentedControl>
      </div>
      <div>
        <button onClick={handleClick} className="items-center">
          <div className="flex flex-row">
            <MdOutlineBackpack size={32} />
          </div>
        </button>
        {modalShow ? (
          <div
            className="absolute flex top-0 left-0 w-full h-full bg-black/60 z-10"
            onClick={() => setModalShow(false)}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="flex flex-col m-auto w-2/3 h-2/3 bg-dark-gray rounded-lg p-2"
            >
              <div className="flex flex-col w-full h-full justify-between">
                <div>
                  <div className="flex flex-row items-center mb-2">
                    <button onClick={() => setModalShow(false)}>
                      <IoIosArrowBack size={32} className="text-[#464646]" />
                    </button>
                    <p className="text-[#464646] text-2xl">Your Backpack</p>
                  </div>
                  <div className="p-2">
                    {IntheBag.map((item) => (
                      <ClassListItem simplified key={item.id} {...item} />
                    ))}
                  </div>
                </div>
                <div className="flex justify-end">
                  <button onClick={() => setModalShow(false)} className="w-1/5">
                    <div className="flex justify-center p-2 bg-user-card-yellow rounded-lg">
                      <p className="font-semibold">Enroll Now</p>
                    </div>
                  </button>
                </div>
              </div>
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ScheduleOfClassesBar;
