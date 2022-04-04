import './App.css';
import React, {useState} from 'react';

function App() {

  const[tasks, setTask] = useState([

    {name: "Cleaning kitchen", priority: "High"},
    {name: "Watering plants", priority: "Low"},
    {name: "Doing the dishes", priority: "High"},

  ]);

  const[priority, setPriority] = useState([
    {priority: "High"},
    {priority: "Low"},
    {priority: "High"}
  ]);

  const[newTask, setNewTask] = useState('');
  const handleTaskInput = (event) =>{
    setNewTask(event.target.value);
  }

  const saveNewTask =(event) =>{
    event.preventDefault();
    const copyTasks = [...tasks];
    copyTasks.push({name: newTask, priority: priority});
    setTask(copyTasks);
    // setNewTask('')
  }

  // const taskToDo = (index) =>{
  //   const copyTasks =[...tasks];
  //   copyTasks[index].priority = true;
  //   setTask(copyTasks);
  // }

  const taskNodes = tasks.map((task, index) =>{
    console.log("priority", task.priority)
    return(
      // <div className="high-priority">
        <li key={index} className={task.priority=="High" ? 'high-priority' : 'low-priority'}>
        <span>{task.name}</span>
        <span>{task.priority}</span>
      
        {/* <button onClick={ () => taskToDo(index)}>Todo</button>
        todo button lets you click and change priority, but does not render different color */}
        </li>  
    // </div>
  )
})

   
  return (

  <div className="App">
    
    <h1>Todo or not to do list</h1>
    <hr></hr>
    
    <ul>
      {taskNodes}
    </ul>
  
    <form onSubmit={saveNewTask}>
    <label htmlFor='new-task'></label>
    <input id='new-task' type = 'text' value={newTask} onChange={handleTaskInput}/>
    <input type='submit' value='Save new task'/>

    <input type="radio" name='priority' value='High'onChange={e=>setPriority(e.target.value)}/>High
    <input type="radio" name='priority' value='Low' onChange={e=>setPriority(e.target.value)}/>Low
    </form>
  
  </div>

  );
}

export default App;



