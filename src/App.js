import React from "react";

import { Switch, Route } from "react-router-dom";

import AppContainer from "./components/app-container/app-container.component";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ProjectsPage from "./pages/projects/projects.component";
import ResumePage from "./pages/resume/resume.component";
import ContactPage from "./pages/contact/contact.component";

import GlobalStyles from "./style-utils/global.styles";

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/projects" component={ProjectsPage}></Route>
        <Route exact path="/resume" component={ResumePage}></Route>
        <Route exact path="/contact" component={ContactPage}></Route>
      </Switch>
    </AppContainer>
  );
}

export default App;
