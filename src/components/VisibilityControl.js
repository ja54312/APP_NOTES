const VisibilityControl = ({setShowCompleted,cleanTask,isChecked}) => {

    const handleDelete = () =>{
        if(window.confirm('estas seguro?')){
            cleanTask()
        }
    }
    return(
      <div>
        <input type='checkbox' checked={isChecked} onChange={e=>setShowCompleted(e.target.checked)}/>{""}<label>Muestrame las tareas realizadas</label>
        <button onClick={handleDelete}>Limpiar</button>
      </div>
    )
}

export default VisibilityControl