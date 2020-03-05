import React, { useState } from "react";
import Button from "./Button";

function NewTask({ tasksState, setTaskState }) {
  const [inputState, setInputState] = useState({ input: "" });

  const handleInput = e => {
    setInputState({ input: e.target.value });
  };
  return (
    <div className="container new-task-block">
      <h2 className="title">Новая задача</h2>
      <div className="input-group mb-3 ">
        <input
          className="input form-control"
          type="text"
          value={inputState.input}
          onChange={handleInput}
        />
        <Button
          inputState={inputState}
          tasksState={tasksState}
          setTaskState={setTaskState}
          btnName={"Начать работу"}
        />
      </div>
    </div>
  );
}

export default NewTask;
