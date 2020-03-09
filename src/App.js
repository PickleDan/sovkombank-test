import React, { useState, useEffect } from "react";
import "./scss/App.scss";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import Header from "./components/Header";
import NewTask from "./components/NewTask";
import CurrentTasks from "./components/CurrentTasks";
import CompletedTasks from "./components/CompletedTasks";
import ChangeTheme from "./components/ChangeTheme";

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${props =>
    props.theme.mode === "dark" ? "#1f2041;" : "#fff"};
  color: ${props => (props.theme.mode === "dark" ? "#EEE" : "#111")}
}
.title {
  color: ${props => (props.theme.mode === "dark" ? "#fff" : "#6979f8")};
}
`;

function App() {
  const [theme, setTheme] = useState({ mode: "light" });

  const [tasksState, setTaskState] = useState([]);

  useEffect(() => {
    fetchAsyncTasks();
  }, []);

  async function fetchAsyncTasks() {
    const response = await fetch("http://localhost:3000/tasks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const result = await response.json();
    await setTaskState(result);
  }

  const clickThemeHandler = e =>
    setTheme(theme.mode === "dark" ? { mode: "light" } : { mode: "dark" });

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <NewTask tasksState={tasksState} setTaskState={setTaskState} />
        <CurrentTasks
          listOfCurrentTasks={tasksState}
          setTaskState={setTaskState}
        />
        <CompletedTasks listOfCurrentTasks={tasksState} />
        <ChangeTheme onClick={clickThemeHandler} />
      </>
    </ThemeProvider>
  );
}

export default App;
