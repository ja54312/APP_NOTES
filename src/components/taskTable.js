import TaskRow from "./taskRow"

const TaskTable = ({tasks,toogleTask,TareasName,showCompleted = false}) => {

    const taskTableRows = (doneValue) =>{


        return(
            tasks
            .filter(task => task.done === doneValue)
            .map((task) => (
                <TaskRow task={task} key={task.name} toogleTask={toogleTask}/>
            ))
        )
    }

    return(
        <table>
        <thead>
          <tr>
            <th>{TareasName}</th>
          </tr>
        </thead>
        <tbody>
          {
            taskTableRows(showCompleted)
          }
        </tbody>
      </table>
    )
}

export default TaskTable