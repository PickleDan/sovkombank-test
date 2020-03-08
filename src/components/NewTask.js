import React, { useState } from "react";
import Button from "./Button";
import moment from "moment";

moment.locale("ru");

function NewTask({ tasksState, setTaskState }) {
  const [inputState, setInputState] = useState({ input: "" });

  const handleInput = e => {
    setInputState({ input: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setTaskState([
      ...tasksState,
      {
        title: inputState.input,
        startTime: moment().format("HH:mm:ss"),
        endTime: 0
      }
    ]);
  };

  return (
    <div className="container new-task-block">
      <h2 className="title">Новая задача</h2>
      <div className="mb-3 ">
        <form className="input-group" onSubmit={handleSubmit}>
          <input
            className="input form-control"
            type="text"
            value={inputState.input}
            onChange={handleInput}
          />
          <Button btnName={"Начать работу"} />
        </form>
      </div>
    </div>
  );
}

export default NewTask;
