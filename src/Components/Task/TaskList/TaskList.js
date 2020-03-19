import React from 'react';
import './TaskList.css';
import TaskItem from '../TaskItem/TaskItem';

const TaskList = ({ tasks, deleteTask, doneTask }) => {
  const task = tasks.map(item => <TaskItem key={item.id} task={item} deleteTask={deleteTask} doneTask={doneTask} />)
  return (
    <>
      <div className="taskList">
        {task}
      </div>
      <div>realized</div>
    </>
  );
}

export default TaskList;
