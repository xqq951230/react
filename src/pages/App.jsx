import { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom"
import { adminRouters } from "../router/dynamic"
import MainHeader from "../components/mainHeader/mainHeader"
import LeftMenu from "../components/LeftMenu/LeftMenu"
import style from "./App.module.scss";
class App extends Component {
  // eslint-disable-next-line no-unused-vars
  render () {
    return (
      <div className={style.Root}>
        <MainHeader />
        <div className={style.Content}>
          <LeftMenu {...this.props} router={adminRouters} />
          <div className={style.ContentView}>
            <Switch>
              {
                adminRouters.map(router => {
                  return <Route
                    key={router.path}
                    path={router.path}
                    render={routerProps => {
                      return <router.component {...routerProps} router={router} />
                    }
                    } />
                })
              }
              <Redirect to='/notFound' />
            </Switch>
          </div>
        </div>
      </div >
    )
  }
}
export default App;
