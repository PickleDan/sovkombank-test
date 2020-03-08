import React, { useState } from "react";
import Button from "./Button";
import moment from "moment";

function CurrentTask({ task }) {
  const [timeDuration, setTimeDuration] = useState(0);
  return (
    <div className="current-task">
      <div className="current-task-item">
        <h3>Название</h3>
        <p className="task-title">{task.title}</p>
      </div>
      <div className="task-duration">
        <div className="current-task-item">
          <h3>Начало</h3>
          <p>{task.startTime}</p>
        </div>
        <div className="current-task-item">
          <h3>Длительность</h3>
          <p></p>
        </div>
      </div>
      <Button btnName={"Закончить работу"} />
    </div>
  );
}

export default CurrentTask;
