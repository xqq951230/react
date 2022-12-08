import React, { Component } from "react"
import { Button, Input, Space, Tooltip } from "antd"
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  InfoCircleOutlined,
  UserOutlined,
  EyeOutlined
} from "@ant-design/icons";
import style from "./login.module.scss";
import classNames from "classnames";
class login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: false
    }
  }
  shouldComponentUpdate () {
    return true
  }
  componentDidMount () {
    console.log("render渲染后的操作")
  }
  getSnapshotBeforeUpdate (nextProps, nextState) {
    console.log("nextProps 和 nextState更新", nextState);
  }
  componentDidUpdate () {
    console.log("更新之后");
  }
  componentWillUnmount () {
    console.log("销毁");
  }
  loginTopage () {
    this.props.history.push({
      pathname: `/admin/branchWork/4`
    })
    // redux do something
  }
  render () {
    console.log("渲染中");
    return (
      <div className={style.login}>
        <div className={classNames(style.loginForm, "b")}>
          <p>用户登录</p>
          <Space direction="vertical" size="large"
            style={{ width: "80%" }}>
            <Input
              size="large"
              bordered={false}
              placeholder="Enter your username"
              prefix={<UserOutlined
                style={{ color: "#A1C9DB" }}
                className="site-form-item-icon" />}
              suffix={
                <Tooltip title="Extra information">
                  <InfoCircleOutlined style={{ color: "#A1C9DB" }} />
                </Tooltip>
              }
            />
            <Input.Password
              size="large"
              bordered={false}
              prefix={<EyeOutlined
                style={{ color: "#A1C9DB" }}
                className="site-form-item-icon" />}
              placeholder="Enter your password"
              iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined
                style={{ color: "#A1C9DB" }} />)}
            />
            <Button
              type="primary"
              size="large"
              onClick={() => {
                this.loginTopage()
              }}
              block>
              登录
            </Button>
          </Space>
        </div>
      </div>
    );
  }
}

export default login;
