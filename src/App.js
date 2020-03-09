import React, { useState } from "react";
import "./scss/App.scss";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import moment from "moment";
import _ from "lodash";

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
      id: parseInt(_.uniqueId()),
      title: "Верстка главной страницы",
      startTime: moment(),
      endTime: null
    },
    {
      id: parseInt(_.uniqueId()),
      title: "Подготовка окружения",
      startTime: moment("08/03/2020 18:15"),
      endTime: moment("08/03/2020 22:15")
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
