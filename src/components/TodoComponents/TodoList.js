// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";

import Todo from "./Todo";

class TodoList extends React.Component {
  render() {
    <div className="todo-list">
      {this.props.todo.map(task => (
        <Todo
          key={item.id}
          task={task}
          toggleCompleted={this.props.toggleCompleted}
        />
      ))}
    </div>;
  }
}

export default TodoList;
