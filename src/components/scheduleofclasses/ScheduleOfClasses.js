import React, { useState, useEffect } from "react";
import anteater from "../../assets/imgs/uci-anteater-logo.png";
import ClassListItem from "./ClassListItem";
import ClassSearchbar from "./ClassSearchbar";
import TermDropdown from "./TermDropdown";

const courses = [
  {
    id: 26452,
    departmentName: "ENGR",
    courseLevel: "70",
    type: "LAB",
    pass: false,
    waitlist: false,
    units: 2,
    location: "SSL 78",
    instructor: "Nair, S.",
    day: [1, 3, 5],
    time: [8, 11],
    opacity: 1,
  },
  {
    id: 26352,
    departmentName: "ENGR",
    courseLevel: "1A",
    type: "LAB",
    pass: false,
    waitlist: false,
    units: 2,
    location: "SSL 78",
    instructor: "Serate, K.",
    day: [2],
    time: [8, 11],
    opacity: 1,
  },
  {
    id: 22352,
    departmentName: "MATH",
    courseLevel: "2B",
    type: "LAB",
    pass: false,
    waitlist: false,
    units: 2,
    location: "SSL 78",
    instructor: "Ngo, T.",
    day: [1, 3, 5],
    time: [8, 11],
    opacity: 1,
  },
];
function ScheduleOfClasses(props) {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(
      courses.filter(
        (course) =>
          course.departmentName.toLowerCase().includes(search.toLowerCase()) ||
          course.courseLevel.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  return (
    <div className="flex flex-col w-1/2 h-fullmr-2 ml-1 bg-inner-background rounded-lg">
      {/* TODO */}
      {/* <img 
        src={anteater}
        className="aspect-video  h-1/2 opacity-40 -rotate-45 "
      /> */}
      {props.classSearchSelected ? (
        <div className="flex flex-col h-full w-full">
          <div className="p-2">
            <TermDropdown term="Winter Quarter 2023" />
            <ClassSearchbar setSearch={setSearch} />
          </div>
          {filteredData.length !== 0
            ? filteredData.map((course, idx) => (
                <ClassListItem
                  key={course.id}
                  simplified={false}
                  {...course}
                  idx={idx}
                />
              ))
            : courses.map((course, idx) => (
                <ClassListItem
                  key={course.id}
                  simplified={false}
                  {...course}
                  idx={idx}
                />
              ))}
        </div>
      ) : null}
      {props.mapSelected ? <div>map selected</div> : null}
    </div>
  );
}

export default ScheduleOfClasses;
