import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Teacher from "./Teacher";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/teacher">
          <Teacher />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
