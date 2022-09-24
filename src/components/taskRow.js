const TaskRow = ({task,toogleTask}) => {
    return(
        <tr>
            <td>
            {task.name}
            <input 
                type='checkbox'
                checked={task.done}
                onChange={()=> toogleTask(task)}
            />
            </td>
        </tr>
    )
}

export default TaskRow