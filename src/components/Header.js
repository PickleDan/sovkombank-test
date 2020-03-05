import React from "react";
import Clock from "./Clock";

function Header() {
  return (
    <div className="header">
      <div className="container header-flex">
        <div>Учет времени работы</div>
        <div>
          Текущее время <Clock />
        </div>
      </div>
    </div>
  );
}

export default Header;
