import './App.css';
import React, {useState} from 'react';

function App() {

  const[tasks, setTask] =useState([

    {name: "Cleaning kitchen", priorityLevel: true},
    {name: "Watering plants", priorityLevel: false},
    {name: "Doing the dishes", priorityLevel: false},

  ]);

  const[newTask, setNewTask] = useState('');
  const handleTaskInput = (event) =>{
    setNewTask(event.target.value);
  }

  const saveNewTask =(event) =>{
    event.preventDefault();
    const copyTasks = [...tasks];
    copyTasks.push({name: newTask, priority: false});
    setTask(copyTasks);
    setNewTask('')
  }

  const taskToDo = (index) =>{
    const copyTasks =[...tasks];
    copyTasks[index].priority = true;
    setTask(copyTasks);
  }

  const taskNodes = tasks.map((task, index) =>{
    return(
    <li key={index} className={task.priority ? 'high' : 'low'}>
    <span>{task.name}</span>
    {task.priority ? <span className='low-priority'>High</span> : <span>Low</span>}

    {/* <button onClick={ () => taskToDo(index)}>Todo</button>
    todo button lets you click and change priority, but does not render different color */}

    </li>
   
  )
  })

  const[priority, setPriority] = useState('');
   
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



