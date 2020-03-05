import React from "react";

function ChangeTheme({ onClick }) {
  return (
    <div onClick={onClick} className="change-theme">
      <div className="outer-circle">
        <div className="inner-circle"></div>
      </div>
    </div>
  );
}

export default ChangeTheme;
