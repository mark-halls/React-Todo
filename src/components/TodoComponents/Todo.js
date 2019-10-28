import React from "react";

class Todo extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <p>{this.props.task}</p>
      </div>
    );
  }
}

export default Todo;
