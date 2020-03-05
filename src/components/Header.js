import React from "react";
import Clock from "./Clock";

function Header() {
  return (
    <div className="header">
      <div className="container header-flex">
        <h1>Учет времени работы</h1>
        <div className="current-time">
          Текущее время <Clock />
        </div>
      </div>
    </div>
  );
}

export default Header;
