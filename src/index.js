import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { mainRouters } from './router'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(mainRouters)
root.render(
  < Router >
    <Switch>
      <Route path='/admin' render={routeProps => <App {...routeProps} />} />
      {mainRouters.map(router => {
        return <Route key={router.path} {...router} />
      })}
      <Redirect to='/404' />
    </Switch>
  </Router >
);

reportWebVitals();
