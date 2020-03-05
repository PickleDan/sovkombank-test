import React from "react";

function CompletedTask() {
  return (
    <div className="completed-task">
      <div className="completed-task-title">Подготовка окружения</div>
      <div className="wrapper">
        <div className="completed-task-item">
          <h3>Начало</h3>
          <div>12:10:15</div>
        </div>
        <div className="completed-task-item">
          <h3>Конец</h3>
          <div>13:19:17</div>
        </div>
        <div className="completed-task-item">
          <h3>Длительность</h3>
          <div>01:09:02</div>
        </div>
      </div>
    </div>
  );
}

export default CompletedTask;
