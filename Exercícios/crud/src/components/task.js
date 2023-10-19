export default function Task(props) {

    return (

        <div key={props.id} style={{backgroundColor: props.completed ? 'green' : 'white'}}> 
            <p>{props.id} {props.task}</p> 
            <button onClick={() => props.completeTask(props.id)}>Complete</button>
            <button onClick={() => props.deleteTask(props)}>X</button>
        </div>
    
    )

}