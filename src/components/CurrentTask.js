import React from "react";
import moment from "moment";

function CurrentTask({ task, currentTime, setTaskState, listOfCurrentTasks }) {
  const finishTaskBtnHandler = (task, e) => {
    const updatedListTasks = listOfCurrentTasks.map(listItem => {
      if (listItem.id === task.id) {
        const updatedTask = {
          title: task.title,
          startTime: task.startTime,
          endTime: moment().format("DD/MM/YYYY HH:mm:ss")
        };
        fetch(`http://localhost:3000/tasks/${task.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(updatedTask)
        });
        return updatedTask;
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
          <p>{moment(task.startTime).format("HH:mm:ss")}</p>
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
