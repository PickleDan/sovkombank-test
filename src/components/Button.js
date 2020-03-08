import React from "react";

function Button({ btnName, inputState, tasksState, setTaskState }) {
  return (
    <button type="submit" className="btn current-task-btn">
      {btnName}
    </button>
  );
}

export default Button;
