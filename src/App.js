import React from "react";

import { Switch, Route } from "react-router-dom";

import AppContainer from "./components/app-container/app-container.component";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";

import GlobalStyles from "./style-utils/global.styles";

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
      </Switch>
    </AppContainer>
  );
}

export default App;
