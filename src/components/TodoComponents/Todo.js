import React from "react";

import "./Todo.css";

class Todo extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div
        className={`task${this.props.task.completed ? " completed" : ""}`}
        onClick={() => this.props.toggleCompleted(this.props.task.id)}
      >
        <p>{this.props.task.task}</p>
      </div>
    );
  }
}

export default Todo;
