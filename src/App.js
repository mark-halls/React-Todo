import React from "react";

import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

import "./App.css";

const dataFromStorage = localStorage.getItem("todo");

const dataToStorage = arr => {
  console.log(arr);
  localStorage.setItem("todo", JSON.stringify(arr));
};

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo: dataFromStorage ? JSON.parse(dataFromStorage) : []
    };
  }

  toggleCompleted = id => {
    this.setState(
      {
        todo: this.state.todo.map(task => {
          if (task.id === id) {
            console.log(task);
            return {
              ...task,
              completed: !task.completed
            };
          } else {
            return task;
          }
        })
      },
      () => dataToStorage(this.state.todo)
    );
  };

  clearCompleted = () => {
    this.setState(
      {
        todo: this.state.todo.filter(task => !task.completed)
      },
      () => dataToStorage(this.state.todo)
    );
  };

  addTask = name => {
    const newTask = {
      task: name,
      id: Date.now(),
      completed: false
    };

    this.setState(
      {
        todo: [...this.state.todo, newTask]
      },
      () => dataToStorage(this.state.todo)
    );
  };

  render() {
    return (
      <div className="app">
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          toggleCompleted={this.toggleCompleted}
          todo={this.state.todo}
          addTask={this.addTask}
        />
        <TodoForm addTask={this.addTask} />
        <button
          className="clear-completed"
          onClick={() => this.clearCompleted()}
        >
          Clear Completed
        </button>
      </div>
    );
  }
}

export default App;
