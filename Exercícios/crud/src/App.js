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
        return {...task, completed: !task.completed}
      }else {
        return task
      }

    })
  

    setTodoList(newList)

  }

  return (
    <div className="App m-auto flex flex-col flex-wrap content-center p-10">
      
      <div className="addTask basis-1/2 w-1/2 m-auto flex flex-wrap">

        <input placeholder="Task..." onChange={handleChange} className='w-10/12 basis-4/5 p-4 break-words border border-gray-500 rounded-md rounded-r-none' />
        <button onClick={addTask} className='w-1/6 basis-1/5 border border-gray-500 rounded-md rounded-l-none bg-blue-500 text-white' >Add Task</button>

      </div>

      <div className="list p-5 flex flex-col">
        
        {todoList.map((taskObj) => {

          return <Task key={taskObj.id} id={taskObj.id} task={taskObj.task} completed={taskObj.completed} deleteTask={deleteTask} completeTask={completeTask} />

        })}

      </div>

    </div>
  );
}

export default App;
