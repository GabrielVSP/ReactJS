import './App.css';
import { useState } from 'react'
import Task from './components/task';

function App() {

  const [todoList, setTodoList] = useState([])
  const [newTask, setNewTask]  = useState({})

  function handleChange(e) {

    setNewTask(e.target.value)

  }

  function addTask() {

    const task = {

      id: todoList.length === 0 ? 1 : todoList[todoList.length -1].id + 1,
      completed: false,
      task: newTask

    }

    //const newTodoList = [...todoList, newTask]
    setTodoList([...todoList, task])

  }

  function deleteTask(taskObj) {

    const newTodoList = todoList.filter((i) => {


      return i.id !== taskObj.id

    })

    setTodoList(newTodoList)

  }

  function completeTask(id) {

    const newList =  todoList.map((task) => {

      if (task.id === id) {
        return {...task, completed: true}
      }else {
        return task
      }

    })
  

    setTodoList(newList)

  }

  return (
    <div className="App">
      
      <div className="addTask">

        <input placeholder="Task..." onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>

      </div>

      <div className="list">
        
        {todoList.map((taskObj) => {

          return <Task key={taskObj.id} id={taskObj.id} task={taskObj.task} completed={taskObj.completed} deleteTask={deleteTask} completeTask={completeTask} />

        })}

      </div>

    </div>
  );
}

export default App;
