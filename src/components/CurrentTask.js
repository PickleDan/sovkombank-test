import React from "react";
import Button from "./Button";

function CurrentTask() {
  return (
    <div className="current-task">
      <div className="current-task-item">
        <h3>Название</h3>
        <p>Верстка главной страницы</p>
      </div>
      <div className="task-duration">
        <div className="current-task-item">
          <h3>Начало</h3>
          <p>12:10:15</p>
        </div>
        <div className="current-task-item">
          <h3>Длительность</h3>
          <p>01.09.02</p>
        </div>
      </div>
      <Button btnName={"Закончить работу"} />
    </div>
  );
}

export default CurrentTask;
