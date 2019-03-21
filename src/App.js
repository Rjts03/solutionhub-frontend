import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routeMap from './router';
import './App.css';

const App = () => {
  const routers = routeMap.map(({path, component}) => <Route exact path={path} component={component} />);
  return (
    <BrowserRouter>
      <Switch>
        {routers}
      </Switch>
    </BrowserRouter>
  );
}
export default App;