import React from "react";
import "./sass/main.scss";
import HomePage from "./components/Pages/HomePage/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Page from "./components/Page";
import ErrorPage from "./components/Pages/ErrorPage/ErrorPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" exact component={Page} />
          <Route path="*" exact={true} component={ErrorPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
