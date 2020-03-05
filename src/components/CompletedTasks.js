import React from "react";
import CompletedTask from "./CompletedTask";

function CompletedTasks() {
  return (
    <div className="completed-tasks-block container">
      <h2 className="title">Мои задачи</h2>
      <div className="completed-tasks-grid">
        <CompletedTask />
      </div>
    </div>
  );
}

export default CompletedTasks;
