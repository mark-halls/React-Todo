import React from "react";

class Todo extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div onClick={() => this.props.toggleCompleted(this.props.task.id)}>
        <p>{this.props.task.task}</p>
      </div>
    );
  }
}

export default Todo;
