import React from 'react';
import './App.css';
import AddTask from '../Task/AddTask/AddTask';
import TaskList from '../Task/TaskList/TaskList';

class App extends React.Component {
  state = {
    tasks: [
      {
        id: 0,
        text: 'asdasdasdasdasadsaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddsdasdasd',
        date: '2020-03-19',
        important: true,
        active: true,
        finishDate: '',
      },
      {
        id: 1,
        text: 'assdasdasd',
        date: '2020-03-19',
        important: true,
        active: true,
        finishDate: '',
      },
    ]
  }

  deleteTask = (id) => {
    console.log('delete' + id);

  }

  changeTaskStatus = (id) => {
    console.log('change' + id);

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