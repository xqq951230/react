import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  delItem = () => {
    const { delTodoItem, index } = this.props
    delTodoItem(index)
  }
  render () {
    return (
      <li >
        <span> {this.props.todo_item}</span>
        <button onClick={this.delItem}>删除</button>
      </li>
    );
  }
}

export default TodoItem