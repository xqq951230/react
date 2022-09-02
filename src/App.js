import React, { Component } from "react";
import { Switch, Route, Redirect } from 'react-router-dom'
import { adminRouters } from './router/index'
class App extends Component {
  render (h) {
    return (
      <div>
        <h1>我是app页面</h1>
        <Switch>
          {
            adminRouters.map(router => {
              return <Route
                key={router.path}
                path={router.path}
                render={routerProps => {
                  return <router.component {...routerProps} />
                }
                } />
            })
          }
          <Redirect to='/404' />
        </Switch>
      </div >
    )
  }
}

export default App;
