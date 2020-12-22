import React from "react";
import "../stylesheets/App.scss";
import Home from "./Home";
import { Route, Switch } from "react-router-dom";
import Editor from "./Editor";

const App = () => {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/editor">
            <Editor />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
