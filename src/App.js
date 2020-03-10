import React, { useState, useEffect } from "react";
import "./scss/App.scss";

import Header from "./components/Header";
import NewTask from "./components/NewTask";
import CurrentTasks from "./components/CurrentTasks";
import CompletedTasks from "./components/CompletedTasks";
import ChangeTheme from "./components/ChangeTheme";

function App() {
  const [tasksState, setTaskState] = useState([]);

  useEffect(() => {
    fetchAsyncTasks();
  }, []);

  async function fetchAsyncTasks() {
    try {
      const response = await fetch("http://localhost:3000/tasks", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const result = await response.json();
      await setTaskState(result);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <>
      <Header />
      <NewTask tasksState={tasksState} setTaskState={setTaskState} />
      <CurrentTasks
        listOfCurrentTasks={tasksState}
        setTaskState={setTaskState}
      />
      <CompletedTasks listOfCurrentTasks={tasksState} />
      <ChangeTheme />
    </>
  );
}

export default App;
