import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: "",
      id: Date.now(),
      completed: false
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTask(this.state.task);
    this.setState({ task: "" });
  };

  handleChange = e => {
    this.setState({
      task: e.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="task"
          id="task"
          value={this.state.task}
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
