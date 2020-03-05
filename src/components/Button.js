import React from "react";

function Button({ btnName, inputState, tasksState, setTaskState }) {
  const handleButton = () => {
    setTaskState([
      ...tasksState,
      {
        title: inputState,
        startTime: "19:05:10",
        duration: "01:01:01"
      }
    ]);
  };

  return (
    <button
      onClick={handleButton}
      type="button"
      className="btn current-task-btn"
    >
      {btnName}
    </button>
  );
}

export default Button;
