// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";

import Todo from "./Todo";

class TodoList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="todo-list">
        {this.props.todo.map(task => (
          <Todo
            key={task.id}
            task={task.task}
            toggleCompleted={this.props.toggleCompleted}
          />
        ))}
      </div>
    );
  }
}

export default TodoList;
