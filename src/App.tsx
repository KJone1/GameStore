import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PageLayout from "./pages/StoreLayout";
import NavSidebar from "./components/NavSidebar";
import MainPage from "./pages/Main";
import InfoPage from "./pages/info";
import GameLayout from "./pages/GameLayout";
import E404 from "./pages/ErrorPage";
function App() {
  return (
    <Router>
      <NavSidebar />
      <Switch>
        <Route exact path={`/`} component={MainPage} />
        <Route path={`/page/:id`} component={PageLayout} />
        <Route path={`/game/:slug`} component={GameLayout} />
        <Route exact path="/info" component={InfoPage} />
        <Route exact path="/error" component={E404} />
        <Route>
          <Redirect to="/error" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

// "https://preview.redd.it/1iwcit1gidyy.jpg?auto=webp&s=2e7883b8b95e0d5ed00e66d862992b618b8a3796"
