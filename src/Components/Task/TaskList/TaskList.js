import React from 'react';
import './TaskList.css';
import TaskItem from '../TaskItem/TaskItem';

const TaskList = ({ tasks, deleteTask, doneTask }) => {

  const activeTasks = tasks.filter(item => item.active === true)
  const doneTasks = tasks.filter(item => item.active === false)

  const taskActive = activeTasks.map(item => <TaskItem key={item.id} task={item} deleteTask={deleteTask} doneTask={doneTask} />)
  const taskDone = doneTasks.map(item => <TaskItem key={item.id} task={item} deleteTask={deleteTask} doneTask={doneTask} />)

  return (
    <>
      <div className="taskList">
        {taskActive}
      </div>
      {doneTasks.length > 5 ? <p>Last 5 tasks:</p> : null}
      <div>{taskDone.slice(0, 5)}</div>
    </>
  );
}

export default TaskList;
