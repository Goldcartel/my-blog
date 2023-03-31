import React from 'react';
import TodoItem from './TodoItem';

export default class TodoBoard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Todo List</h1>
                {this.props.todoList.map((item)=><TodoItem item = {item}/>)}
            </div>
        )
    }
}