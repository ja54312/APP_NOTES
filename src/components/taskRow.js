const TaskRow = ({task,toogleTask}) => {
    return(
        <tr>
            <td className="container-tarea">
            {task.name}
                <input 
                    className="checkbox-tarea"
                    type='checkbox'
                    hidden=""
                    checked={task.done}
                    onChange={()=> toogleTask(task)}
                />
            </td>
        </tr>
    )
}

export default TaskRow