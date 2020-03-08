import React, { useState, useEffect } from "react";
import Button from "./Button";
import moment from "moment";
import Clock from "./Clock";

function CurrentTask({ task, currentTime }) {
  return (
    <div className="current-task">
      <div className="current-task-item">
        <h3>Название</h3>
        <p className="task-title">{task.title}</p>
      </div>
      <div className="task-duration">
        <div className="current-task-item">
          <h3>Начало</h3>
          <p>{task.startTime.format("HH:mm:ss")}</p>
        </div>
        <div className="current-task-item">
          <h3>Длительность</h3>
          <p>
            {moment
              .utc(
                moment(currentTime.date, "DD/MM/YYYY HH:mm:ss").diff(
                  moment(task.startTime, "DD/MM/YYYY HH:mm:ss")
                )
              )
              .format("HH:mm:ss")}
          </p>
        </div>
      </div>
      <Button btnName={"Закончить работу"} />
    </div>
  );
}

export default CurrentTask;
