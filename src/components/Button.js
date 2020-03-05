import React from "react";

function Button({ btnName }) {
  return (
    <button type="button" className="btn current-task-btn">
      {btnName}
    </button>
  );
}

export default Button;
