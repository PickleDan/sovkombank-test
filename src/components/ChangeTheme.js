import React from "react";

function ChangeTheme() {
  if (localStorage.getItem("night-theme")) {
    document.body.classList.add("night-theme");
  }
  const changeThemeHandler = e => {
    e.preventDefault();
    if (document.body.classList.contains("night-theme")) {
      document.body.classList.remove("night-theme");
      localStorage.removeItem("night-theme");
    } else {
      document.body.classList.add("night-theme");
      localStorage.setItem("night-theme", true);
    }
  };
  return (
    <div onClick={changeThemeHandler} className="change-theme">
      <div className="outer-circle">
        <div className="inner-circle"></div>
      </div>
    </div>
  );
}

export default ChangeTheme;
