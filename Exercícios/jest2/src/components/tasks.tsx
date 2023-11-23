import { useState } from 'react'
import Button from './button'
import axios from 'axios'

interface taskInfo {

    id: string,
    title: string

}

export default function Tasks() {

    const [tasks, setTasks] = useState<taskInfo[]>([])

    async function getTask() {

        axios.get("http://jsonplaceholder.typicode.com/todos?_limit=10").then((res) => {
            setTasks(res.data)
        })

    }

    return (

        <>
            <h1>Tasks</h1>
            <button disabled={false} onClick={() => getTask()}>Get task</button>

            
            {tasks.map((task) => 
                <div key={task?.id}>{task?.title}</div>
            )}

        </>

    )

}