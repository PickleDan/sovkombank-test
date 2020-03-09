import { useState } from "react";

function Clock() {
  const [date, setDate] = useState(new Date());

  setInterval(() => setDate(new Date()), 1000);

  return date.toLocaleTimeString();
}

export default Clock;
