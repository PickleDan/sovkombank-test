import React from "react";
import Button from "./Button";

function NewTask() {
  return (
    <div className="container new-task-block">
      <h2 className="title">Новая задача</h2>
      <div className="input-group mb-3 ">
        <input className="input form-control" type="text" />
        <Button btnName={"Начать работу"} />
      </div>
    </div>
  );
}

export default NewTask;
