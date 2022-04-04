import './App.css';
import React, {useState} from 'react';

function App() {

  const[items, setItems] =useState([

    {name: "Cleaning kitchen", isCompleted: true},
    {name: "Watering plants", isCompleted: false},
    {name: "Doing the dishes", isCompleted: true},

  ]);

  const[newTask, setNewTask] = useState('');
  const handleTaskInput = (event) =>{
    setNewTask(event.target.value);
  }

  const saveNewTask =(event) =>{
    event.preventDefault()
    const copyTasks = [...tasks];
    copyTasks.push({name: newTask, isCompleted:false});
    setTask(copyTasks);
    setNewTask('');
  };



  return (
    <div className="App">

    <h1>My Todo list</h1>
    <hr></hr>

    <ul>
      {/* {taskNodes} */}
    </ul>

    <form onSubmit={saveNewTask}/>
    <label htmlFor='new-task'>What else to do:</label>
    <input id='new-task' type = 'text' value={newTask} onChange={handleTaskInput}/>
    <input type='submit' value='Save new task'/>
    </div>



  );
}

export default App;
