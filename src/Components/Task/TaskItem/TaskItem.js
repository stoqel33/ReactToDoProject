import React from 'react';
import './TaskItem.css';

const TaskItem = ({ task, deleteTask, doneTask }) => {

  if (task.active) {
    return (
      <div className="taskItem">
        {task.important ?
          <p className='red'>{task.text.toUpperCase()}</p> : <p>{task.text}</p>
        }
        <small>{task.date}</small>
        <button onClick={() => doneTask(task.id)} className="doneBtn">
          Done
      </button>
        <button onClick={() => deleteTask(task.id)} className="closeBtn">
          X
      </button>
      </div>
    );
  } else {
    return (
      <div>
        <div className="taskItemDone">
          <p className="taskText">{task.text} <i><small>({task.date})</small></i></p>
          <div>
            <p className="done">Done: {task.finishDate}</p>
          </div>
          <button onClick={() => deleteTask(task.id)} className="closeBtn">
            X
          </button>
        </div>
      </div>
    );
  }


}

export default TaskItem;