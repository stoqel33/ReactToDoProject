import React from 'react';
import './AddTask.css';

class AddTask extends React.Component {
  state = {
    text: '',
    checked: false,
    date: new Date().toISOString().slice(0, 10)
  }

  handleDate = (e) => {
    this.setState({
      date: e.target.value,
    })
  }

  handleText = (e) => {
    this.setState({
      text: e.target.value,
    })
  }

  handleCheckbox = (e) => {
    this.setState({
      checked: e.target.checked,
    })
  }

  handleClick = () => {
    const { text, checked, date, } = this.state;
    const newTask = this.props.addTask(text.trim(), date, checked);
    if (newTask) {
      this.setState({
        text: '',
        checked: false,
        date: new Date().toISOString().slice(0, 10)
      })
    }
  }

  render() {
    return (
      <div className="addTask">
        <input
          type="text"
          placeholder="Add new task"
          value={this.state.text}
          onChange={this.handleText}
        />
        <input type="checkbox" id="important" checked={this.state.checked} onClick={this.handleCheckbox} />
        <label htmlFor="important" >Important</label>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={this.state.date}
          min={this.state.date}
          onChange={this.handleDate}
        />
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

export default AddTask;