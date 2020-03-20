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
        <div>
          <input
            type="text"
            className="textInput"
            placeholder="add new task"
            value={this.state.text}
            onChange={this.handleText}
          />
        </div>
        <div className="infoAdd">
          <label htmlFor="date" className="dateLabel">Date:</label>
          <input
            type="date"
            id="date"
            className="dateInput"
            value={this.state.date}
            min={this.state.date}
            onChange={this.handleDate}
          />
          <input
            type="checkbox"
            id="important"
            className="checkboxInput"
            checked={this.state.checked}
            onChange={this.handleCheckbox}
          />
          <label htmlFor="important" className="checkboxLabel" >Important</label>
        </div>
        <button
          onClick={this.handleClick}
          className="btnAdd"
        >
          ADD
        </button>
      </div>
    );
  }
}

export default AddTask;