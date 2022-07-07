import React from 'react';
import './App.css';
// import Exercise from './component/exercise/Exercise';
import TaskList from './component/taskList/TaskList';

function App() {
  return (
    <div className='task-app'>
      <TaskList/>
      {/* <Exercise/> */}
    </div>
  );
}
export default App;
