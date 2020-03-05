import React from "react";
import "./App.scss";
import Header from "./components/Header";
import NewTask from "./components/NewTask";
import CurrentTasks from "./components/CurrentTasks";

function App() {
  return (
    <>
      <Header />
      <NewTask />
      <CurrentTasks />
    </>
  );
}

export default App;
