import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Pages
import Main from "./pages/Main";
import Bet from "./pages/Bet";
import Race from "./pages/Race";

const Routes: React.FC = () => {
  return (
    <BrowserRouter basename="horse-race">
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/bet" component={Bet} exact />
        <Route path="/race" component={Race} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;