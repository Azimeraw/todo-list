import React, { useState } from 'react';
import TaskForm from '../taskForm/TaskForm';
import Task from '../task/Task';
import "./taskList.css";
function TaskList() {
  const [tasks, setTasks] = useState([]);
  const addTask = task => {
    if (!task.text || /^\s*$/.test(task.text)) {
      return;
    }

    const newTasks = [task, ...tasks];

    setTasks(newTasks);
  };
  const completeTask = id => {
    let updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = id => {
    const deleteArr = [...tasks].filter(task => task.id !== id);

    setTasks(deleteArr);
  };
  const updateTask = (taskId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTasks(prev => prev.map(item => (item.id === taskId ? newValue : item)));
  };
  return (
    <>
      <h1 className='title'>Todo Task</h1>
      <TaskForm onSubmit={addTask} />
      <Task
        tasks={tasks}
        completeTask={completeTask}
        deleteTask={deleteTask}
        updateTask={updateTask}
      />
    </>
  );
}

export default TaskList;
