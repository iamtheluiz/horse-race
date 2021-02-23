import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Pages
import Main from './pages/Main';
import Bet from './pages/Bet';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/bet" component={Bet} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;