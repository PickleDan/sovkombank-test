import React from "react";
import Clock from "./CurrentTime";

function Header() {
  return (
    <div className="header">
      <div>Учет времени работы</div>
      <div>
        Текущее время <Clock />
      </div>
    </div>
  );
}

export default Header;
