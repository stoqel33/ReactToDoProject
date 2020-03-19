import React from 'react';
import './TaskItem.css';

const TaskItem = ({ task, deleteTask, doneTask }) => {

  if (task.active) {
    return (
      <div className="taskItem">
        {task.important ?
          <p className='red'>{task.text}</p> : <p>{task.text}</p>
        }
        <p>{task.date}</p>
        <button onClick={() => doneTask(task.id)}>
          Done
      </button>
        <button onClick={() => deleteTask(task.id)}>
          X
      </button>
      </div>
    );
  } else {
    return (
      <div>
        <div className="taskItemDone">
          <p>{task.text} <i><small>({task.date})</small></i></p>
          <div>
            <p className="done">Done:</p>
            {task.finishDate}
          </div>
          <button onClick={() => deleteTask(task.id)}>
            X
        </button>
        </div>
      </div>
    );
  }


}

export default TaskItem;