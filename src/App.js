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
`;

function App() {
  const [theme, setTheme] = useState({ mode: "light" });

  const clickThemeHandler = e =>
    setTheme(theme.mode === "dark" ? { mode: "light" } : { mode: "dark" });

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <NewTask />
        <CurrentTasks />
        <CompletedTasks />
        <ChangeTheme onClick={clickThemeHandler} />
      </>
    </ThemeProvider>
  );
}

export default App;
