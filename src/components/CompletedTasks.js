import React from "react";
import CompletedTask from "./CompletedTask";

function CompletedTasks({ listOfCurrentTasks }) {
  return (
    <div className="completed-tasks-block container">
      <h2 className="title">Мои задачи</h2>
      <div className="completed-tasks-grid">
        {listOfCurrentTasks.map(task => {
          if (task.endTime !== null) {
            return <CompletedTask key={task.id} task={task} />;
          } else return null;
        })}
      </div>
    </div>
  );
}

export default CompletedTasks;
