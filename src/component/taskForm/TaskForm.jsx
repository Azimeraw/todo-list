import React, { useState, useEffect, useRef } from 'react';
import { FaPlus } from 'react-icons/fa';
import "./taskForm.css";
function TaskForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000000000000),
      text: input
    });
    setInput('');
  };

  const handleChange = e => {
    setInput(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className='task-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='task-input edit'
            required
          />
          <button onClick={handleSubmit} className='task-btn edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Input task'
            value={input}
            onChange={handleChange}
            name='text'
            className='task-input'
            ref={inputRef}
            required
          />
          <button onClick={handleSubmit} className='task-btn'>
          <FaPlus className='btn-icon-save'/>
          </button>
        </>
      )}
    </form>
  );
}

export default TaskForm;
