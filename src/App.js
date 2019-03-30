import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store/store';
import routeMap from './router';
import Auth from './Service/Auth';
import Base from './ThemedComponents/Base';
import Login from './Components/Login';
import './App.css';

const App = () => {
  const auth = new Auth();
  
  const routers = routeMap.map(({path, component}) => {
    if (path === '/login') {
      return <Route key={path} exact path={path} render={() => <Login auth={auth} />} />;  
    }
    return <Route key={path} exact path={path} component={component} />;
  });
  
  return (
    <Provider store={store}>
      <Router>
        <Base>
          <Switch>
            {routers}
          </Switch>
        </Base>
      </Router>
    </Provider>
  );
}
export default App;