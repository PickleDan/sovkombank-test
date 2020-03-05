import React from "react";
import CurrentTask from "./CurrentTask";

function CurrentTasks({ listOfCurrentTasks }) {
  return (
    <div className="container current-tasks-block">
      <h2 className="title">Текущие задачи</h2>
      <div className="current-task-list">
        {listOfCurrentTasks.map(task => (
          <CurrentTask task={task} />
        ))}
      </div>
    </div>
  );
}

export default CurrentTasks;
