import './App.css';
import React, {useState} from 'react';

function App() {

  const[tasks, setTask] =useState([

    {name: "Cleaning kitchen"},
    {name: "Watering plants"},
    {name: "Doing the dishes"},

  ]);

  const[newTask, setNewTask] = useState('');
  const handleTaskInput = (event) =>{
    setNewTask(event.target.value);
  }

  const saveNewTask =(event) =>{
    event.preventDefault();
    const copyTasks = [...tasks];
    copyTasks.push({name: newTask});
    setTask(copyTasks);
    setNewTask('')
  }


  const taskNodes = tasks.map((task, index) =>{
    return(

    <li key={index}>
    <span>{task.name}</span>
    </li>
  )
  })


  const[priority, setPriority] = useState('');
   



  return (
    <>
    <div className="App">

    <h1>Todo or not to do list</h1>
    <hr></hr>

    <ul>
      {taskNodes}
    </ul>

    <form onSubmit={saveNewTask}>
    <label htmlFor='new-task'></label>
    <input id='new-task' type = 'text' value={newTask} onChange={handleTaskInput}/>
    <input type='submit' value='Save-new-task'/>
    <input type="radio" name='priority' value='High' onChange={e=>setPriority(e.target.value)}/>High
    <input type="radio" name='priority' value='Low'  onChange={e=>setPriority(e.target.value)}/>Low
    </form>
    </div>
</>

  );
}

export default App;
