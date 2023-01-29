import React from "react";
import Banner from "./components/Banner";
import Header from "./components/header/Header";
import Schedule from "./components/schedule/Schedule";
import ScheduleBar from "./components/schedule/ScheduleBar";
import ScheduleOfClasses from "./components/scheduleofclasses/ScheduleOfClasses";
import ScheduleOfClassesBar from "./components/scheduleofclasses/ScheduleOfClassesBar";

function App() {
  return (
    <div className="flex flex-col h-screen bg-background">
      <Header />
      <Banner />
      <div className="flex flex-row justify-between py-2">
        <ScheduleBar />
        <ScheduleOfClassesBar />
      </div>
      <div className="flex flex-row justify-between py-2 h-full">
        <Schedule />
        <ScheduleOfClasses />
      </div>
    </div>
  );
}

export default App;
