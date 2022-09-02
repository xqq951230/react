import React, { Component, Fragment } from "react";
import TodoItem from './TodoItem'
class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '', // 关联input输入的值
      list: ['1', '2', '3']    //事务列表
    }
  }
  changeInputValue = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }
  addTOdoList = () => {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  delTodoItem = (index) => {
    const { list } = this.state
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
  render () {
    return (
      <Fragment>
        <div>
          <input type="text"
            value={this.state.inputValue}
            onChange={this.changeInputValue} />
          <button
            onClick={this.addTOdoList}>添加</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <TodoItem
                todo_item={item}
                index={index}
                delTodoItem={this.delTodoItem}
                key={index}
              />
            })
          }
        </ul>
      </Fragment >
    )
  }
}
export default TodoList