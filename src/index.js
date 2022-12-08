import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import { mainRouters } from "./router"
import App from "./pages/App"
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import moment from "moment";
import "antd/dist/antd.min.css";
import "../src/static/css/index.scss"
import '../src/static/css/scrollbar.scss'
moment.locale("zh-cn");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  < Router >
    <Switch>
      {/* 后台路由  */}
      <Route path='/admin' render={routeProps => <App {...routeProps} />} />
      {/* 大屏路由 */}
      {/* 静态路由 */}
      {
        mainRouters.map(router => {
          return <Route exact key={router.path} {...router} />
        })
      }
      <Redirect to='/notFound' />
    </Switch>
  </Router >
)

reportWebVitals()
