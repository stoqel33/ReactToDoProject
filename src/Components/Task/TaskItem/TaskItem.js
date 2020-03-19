import React from 'react';
import './TaskItem.css';

const TaskItem = ({ task, deleteTask, doneTask }) => {
  return (
    <div className="taskItem">
      <p>{task.text}</p>
      <p>{task.date}</p>
      <button onClick={() => doneTask(task.id)}>
        Done
      </button>
      <button onClick={() => deleteTask(task.id)}>
        X
      </button>
    </div>
  );
}

export default TaskItem;