import React from "react";
import moment from "moment";

function CompletedTask({ task }) {
  return (
    <div className="completed-task">
      <div className="completed-task-title">{task.title}</div>
      <div className="wrapper">
        <div className="completed-task-item">
          <h3>Начало{task.id}</h3>
          <div>{moment(task.startTime).format("HH:mm:ss")}</div>
        </div>
        <div className="completed-task-item">
          <h3>Конец</h3>
          <div>{moment(task.endTime).format("HH:mm:ss")}</div>
        </div>
        <div className="completed-task-item">
          <h3>Длительность</h3>
          <div>
            {moment
              .utc(
                moment(task.endTime, "DD/MM/YYYY HH:mm:ss").diff(
                  moment(task.startTime, "DD/MM/YYYY HH:mm:ss")
                )
              )
              .format("HH:mm:ss")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedTask;
