import React from 'react';
import './App.css';
import AddTask from '../Task/AddTask/AddTask';
import TaskList from '../Task/TaskList/TaskList';

class App extends React.Component {
  counter = 0;
  state = {
    tasks: []
  }

  addTask = (text, date, important) => {
    if (text.length > 2) {

      const task =
      {
        id: this.counter,
        text,
        date,
        important,
        active: true,
        finishDate: '',
      }
      this.counter++;

      this.setState((prevState) => ({
        tasks: [...prevState.tasks, task]
      }))
      return true
    }
  }

  deleteTask = (id) => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter(item => item.id !== id)
    this.setState({
      tasks,
    })
  }

  changeTaskStatus = (id) => {
    const tasks = [...this.state.tasks];
    tasks.forEach(item => {
      if (item.id === id) {
        item.active = false
        item.finishDate = new Date().toLocaleString()
      }
    })

    this.setState({
      tasks,
    })
  }
  render() {
    return (
      <div className="wrapperApp">
        <h1>To-Do List</h1>
        <AddTask addTask={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
          doneTask={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;