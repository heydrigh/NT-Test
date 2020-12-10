import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Buyers from '../pages/Buyers';
import Profit from '../pages/Profit';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/buyers" component={Buyers} />
    <Route path="/profit" component={Profit} />
  </Switch>
);

export default Routes;
