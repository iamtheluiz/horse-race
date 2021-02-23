import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Pages
import Main from './pages/Main';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;