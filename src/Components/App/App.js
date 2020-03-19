import React from 'react';
import './App.css';
import AddTask from '../Task/AddTask/AddTask';
import TaskList from '../Task/TaskList/TaskList';

class App extends React.Component {
  state = {
    tasks: [
      {
        id: 0,
        text: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
        date: '2020-03-19',
        important: true,
        active: true,
        finishDate: '',
      },
      {
        id: 1,
        text: 'lorem lorem lorem lorem lorem lorem',
        date: '2020-03-19',
        important: true,
        active: true,
        finishDate: '',
      },
      {
        id: 2,
        text: 'lorem lorem lorem',
        date: '2020-03-19',
        important: true,
        active: true,
        finishDate: '',
      },
      {
        id: 3,
        text: 'lorem',
        date: '2020-03-19',
        important: true,
        active: true,
        finishDate: '',
      },
      {
        id: 4,
        text: 'lorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem lorem',
        date: '2020-03-19',
        important: true,
        active: true,
        finishDate: '',
      },
      {
        id: 5,
        text: 'lorem lorem loremlorem lorem loremlorem lorem lorem',
        date: '2020-03-19',
        important: true,
        active: true,
        finishDate: '',
      },
      {
        id: 6,
        text: 'lorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem lorem',
        date: '2020-03-19',
        important: true,
        active: true,
        finishDate: '',
      },
      {
        id: 7,
        text: 'lorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem lorem',
        date: '2020-03-19',
        important: true,
        active: true,
        finishDate: '',
      },
    ]
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
        <h1>App</h1>
        <AddTask />
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