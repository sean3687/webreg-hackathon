import React, { useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/header/Header";
import Schedule from "./components/schedule/Schedule";
import ScheduleBar from "./components/schedule/ScheduleBar";
import ScheduleOfClasses from "./components/scheduleofclasses/ScheduleOfClasses";
import ScheduleOfClassesBar from "./components/scheduleofclasses/ScheduleOfClassesBar";

function App() {
  const [calendarSelected, setCalendarSelected] = useState(true);
  const [listSelected, setListSelected] = useState(false);
  const [finalsSelected, setFinalsSelected] = useState(false);

  const [classSearchSelected, setClassSearchSelected] = useState(true);
  const [mapSelected, setMapSelected] = useState(false);
  return (
    <div className="flex flex-col h-screen bg-background">
      <Header />
      <Banner />
      <div className="flex flex-row justify-between py-2">
        <ScheduleBar
          calendarSelected={calendarSelected}
          setCalendarSelected={setCalendarSelected}
          listSelected={listSelected}
          setListSelected={setListSelected}
          finalsSelected={finalsSelected}
          setFinalsSelected={setFinalsSelected}
        />
        <ScheduleOfClassesBar
          classSearchSelected={classSearchSelected}
          setClassSearchSelected={setClassSearchSelected}
          mapSelected={mapSelected}
          setMapSelected={setMapSelected}
        />
      </div>
      <div className="flex flex-row justify-between py-2 h-full">
        <Schedule
          calendarSelected={calendarSelected}
          listSelected={listSelected}
          finalsSelected={finalsSelected}
        />
        <ScheduleOfClasses
          classSearchSelected={classSearchSelected}
          mapSelected={mapSelected}
        />
      </div>
    </div>
  );
}

export default App;
