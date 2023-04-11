import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoBoard extends Component {
  render() {
    return (
        <div className='dis'>
        <h1>오늘 할 일</h1>
        {this.props.todoList.map((value,index)=><TodoItem todoList={this.props.todoList} delItem={this.props.delItem} 
        item={value} index={index} />)}
    </div>
    )
  }
}
