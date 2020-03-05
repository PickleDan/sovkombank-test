import React, { useState } from "react";
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

  const [tasksState, setTaskState] = useState([
    {
      title: "Верстка главной страницы",
      startTime: "12:10:15",
      duration: "01:09:02"
    },
    {
      title: "Написание кода",
      startTime: "15:10:15",
      duration: "02:09:02"
    }
  ]);

  const clickThemeHandler = e =>
    setTheme(theme.mode === "dark" ? { mode: "light" } : { mode: "dark" });

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <NewTask tasksState={tasksState} setTaskState={setTaskState} />
        <CurrentTasks listOfCurrentTasks={tasksState} />
        <CompletedTasks />
        <ChangeTheme onClick={clickThemeHandler} />
      </>
    </ThemeProvider>
  );
}

export default App;
