import React from "react";
import Button from "./Button";

function AddNewTask() {
  return (
    <div className="container new-task-block">
      <h2>Новая задача</h2>
      <div className="input-group mb-3 ">
        <input className="input form-control" type="text" />
        <Button />
      </div>
    </div>
  );
}

export default AddNewTask;
