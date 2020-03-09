import React from "react";

function Button({ btnName, type }) {
  return (
    <button type={type} className="btn current-task-btn">
      {btnName}
    </button>
  );
}

export default Button;
