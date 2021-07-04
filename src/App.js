import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
export const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Navigation} />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  );
};
