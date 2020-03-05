import React from "react";
import CurrentTask from "./CurrentTask";

function CurrentTasks() {
  return (
    <div className="container current-tasks-block">
      <h2 className="title">Текущие задачи</h2>
      <div className="current-task-list">
        <CurrentTask />
      </div>
    </div>
  );
}

export default CurrentTasks;
