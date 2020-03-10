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

    if (inputState.input.length < 4 || inputState.input.length > 35) {
      alert("Количество символов должно быть не меньше 6 и не больше 35");
    } else {
      const newTask = {
        title: inputState.input,
        startTime: moment().format("DD/MM/YYYY HH:mm:ss"),
        endTime: null
      };

      async function fetchAsyncTasks() {
        try {
          const response = await fetch("http://localhost:3000/tasks", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(newTask)
          });
          const result = await response.json();
          await setTaskState([
            {
              id: result.id,
              title: inputState.input,
              startTime: moment().format("DD/MM/YYYY HH:mm:ss"),
              endTime: null
            },
            ...tasksState
          ]);
        } catch (e) {
          console.error(e);
        }
      }
      fetchAsyncTasks();
    }

    setInputState({ input: "" });
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
          <Button btnName={"Начать работу"} type={"submit"} />
        </form>
      </div>
    </div>
  );
}

export default NewTask;
