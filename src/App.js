import React from "react";

import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

const data = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo: data
    };
  }

  toggleCompleted = id => {
    this.setState({
      todo: this.state.todo.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.purchased
          };
        } else {
          return task;
        }
      })
    });
  };

  addTask = name => {
    const newTask = {
      task: name,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todo: [...this.state.todo, newTask]
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          toggleCompleted={this.toggleCompleted}
          todo={this.state.todo}
          addTask={this.addTask}
        />
        <TodoForm addTask={this.addTask} />
      </div>
    );
  }
}

export default App;
