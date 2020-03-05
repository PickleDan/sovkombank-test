import React from "react";
import "./App.scss";
import Header from "./components/Header";
import NewTask from "./components/NewTask";
import CurrentTasks from "./components/CurrentTasks";
import CompletedTasks from "./components/CompletedTasks";
import ChangeTheme from "./components/ChangeTheme";

function App() {
  return (
    <>
      <Header />
      <NewTask />
      <CurrentTasks />
      <CompletedTasks />
      <ChangeTheme />
    </>
  );
}

export default App;
