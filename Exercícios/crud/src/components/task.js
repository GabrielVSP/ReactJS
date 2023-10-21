export default function Task(props) {

    return (

        <div key={props.id} style={{backgroundColor: props.completed ? '#86efac' : 'white'}} className="flex justify-between mt-2 border border-gray-800 rounded"> 

            <p className="basis-1/6 text-center border-r border-gray-900">
               {props.id}
            </p> 
            <p className="max-w-xs break-words text-justify p-1">
                {props.task}
            </p>

            <div className="basis-1/5 flex justify-around">
                <button onClick={() => props.completeTask(props.id)} className="border-b border-blue-600 hover:bg-blue-300" >Complete</button>
                <button onClick={() => props.deleteTask(props)}className="border-b border-red-600 hover:bg-red-300" >Delete</button>
            </div>

        </div>
    
    )

}