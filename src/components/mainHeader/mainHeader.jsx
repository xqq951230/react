import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import { Space, Input } from "antd"
import { SearchOutlined, QuestionCircleOutlined } from "@ant-design/icons"
import style from "./mainHeader.module.scss"
class MainHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render () {
    console.log(this.props, "mainHeader");
    return (
      <div className={style.mainHeader}>
        <p>浙里机关党建</p>
        <Space size="middle">
          <Input
            size="middle"
            bordered={false}
            placeholder="请输入关键词搜索吧~"
            style={{ width: " 290px" }}
            suffix={
              <SearchOutlined
                style={{
                  color: "rgba(255,255,255, 0.4)",
                  fontSize: "20px"
                }}
              />
            }
          />
          <QuestionCircleOutlined
            style={{
              color: "rgba(255,255,255, 0.4)",
              fontSize: "22px"
            }}
          />
          <p>退出</p>
        </Space>
      </div>
    )
  }
}

// withRouter把不是通过路由切换过来的组件中，将 history、location、match 三个对象传入props对象上
export default withRouter(MainHeader)
