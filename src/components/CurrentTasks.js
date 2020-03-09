import React, { useState } from "react";
import CurrentTask from "./CurrentTask";
import moment from "moment";

function CurrentTasks({ listOfCurrentTasks, setTaskState }) {
  const [currentTime, setCurrentTime] = useState({ date: new Date() });
  setInterval(() => setCurrentTime({ date: new moment() }), 1000);
  return (
    <div className="container current-tasks-block">
      <h2 className="title">Текущие задачи</h2>
      <div className="current-task-list">
        {listOfCurrentTasks.map(task => {
          if (task.endTime === "null") {
            return (
              <CurrentTask
                task={task}
                currentTime={currentTime}
                setTaskState={setTaskState}
                listOfCurrentTasks={listOfCurrentTasks}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default CurrentTasks;
