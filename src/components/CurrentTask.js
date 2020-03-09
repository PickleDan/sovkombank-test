import React from "react";
import moment from "moment";
import _ from "lodash";

function CurrentTask({ task, currentTime, setTaskState, listOfCurrentTasks }) {
  const finishTaskBtnHandler = (task, e) => {
    const updatedListTasks = listOfCurrentTasks.map(listItem => {
      if (listItem.id === task.id) {
        return {
          id: parseInt(_.uniqueId()),
          title: task.title,
          startTime: task.startTime,
          endTime: moment()
        };
      } else return listItem;
    });
    setTaskState(updatedListTasks);
  };

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
      <button
        onClick={() => finishTaskBtnHandler(task)}
        type="button"
        className="btn current-task-btn"
      >
        Закончить работу
      </button>
    </div>
  );
}

export default CurrentTask;
