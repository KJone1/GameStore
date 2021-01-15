import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageLayout from "./pages/StoreLayout";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={`/page/:id`} component={PageLayout} />
      </Switch>
    </Router>
  );
}

export default App;

// "https://preview.redd.it/1iwcit1gidyy.jpg?auto=webp&s=2e7883b8b95e0d5ed00e66d862992b618b8a3796"
