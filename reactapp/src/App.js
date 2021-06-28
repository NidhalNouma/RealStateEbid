import React from "react";
import routes from "./Constant/routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Views/Home";
import SignIn from "./Views/SignIn";
import GetStarted from "./Views/GetStarted";
import Prop from "./Views/Prop";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={routes.home} exact component={Home} />
        <Route path={routes.signIn} exact component={SignIn} />
        <Route path={routes.getStarted} exact component={GetStarted} />
        <Route path={routes.prop} exact component={Prop} />
      </Switch>
    </Router>
  );
}

export default App;
