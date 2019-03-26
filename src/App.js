import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routeMap from './router';
import './App.css';
import Base from './ThemedComponents/Base';

const App = () => {
  const routers = routeMap.map(({path, component}) => {
    return <Route key={path} exact path={path} component={component} />;
  });
  
  return (
    <Router>
      <Base>
        <Switch>
          {routers}
        </Switch>
      </Base>
    </Router>
  );
}
export default App;