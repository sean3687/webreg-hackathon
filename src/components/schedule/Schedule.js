import React from "react";

function Schedule(props) {
  return (
    <div className="flex w-1/2 ml-2 mr-1">
      {props.calendarSelected ? <div>calendar</div> : null}
      {props.listSelected ? <div>list</div> : null}
      {props.finalsSelected ? <div>final</div> : null}
    </div>
  );
}

export default Schedule;
