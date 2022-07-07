import React, { useState } from 'react';
import { RiDeleteBin6Line, RiEditBoxLine } from 'react-icons/ri';
import "./task.css";
import TaskForm from '../taskForm/TaskForm';
  const Task = ({ tasks, completeTask, deleteTask, updateTask }) => {
  const [edit, setEdit] = useState({id: null,value: ''});
   
  const submitUpdate = value => {
    updateTask(edit.id, value);
    setEdit({id: null,value: ''
    });
  };

  if (edit.id) {
    return <TaskForm edit={edit} onSubmit={submitUpdate} />;
  }

  return tasks.map((task, index) => (
    
    <div
      className={task.isComplete ? 'task-row complete' : 'task-row'}
      key={index}
    >
      <div key={task.id} onClick={() => completeTask(task.id)}>
      <input type="checkbox" className='checkbox'></input>
          {task.text}
      </div>
       <div className='iconAll'>
        <RiDeleteBin6Line
          onClick={() => deleteTask(task.id)}
          className='delete'
        />
        <RiEditBoxLine
          onClick={() => setEdit({ id: task.id, value: task.text })}
          className='edit'
        />
      </div>
       
    </div> 
  ));
};

export default Task;
