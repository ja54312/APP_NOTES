import Eliminar from '../assets/eliminar.png'
const VisibilityControl = ({setShowCompleted,cleanTask,isChecked}) => {

    const handleDelete = () =>{
        if(window.confirm('estas seguro?')){
            cleanTask()
        }
    }
    return(
      <div className='container-visibilityControl'>
        <input type='checkbox' checked={isChecked} onChange={e=>setShowCompleted(e.target.checked)}/>{""}<label>Muestrame las tareas realizadas</label>
        <button onClick={handleDelete}>
          <img src={Eliminar} alt='elminar' className='boton-eliminar'/>
        </button>
      </div>
    )
}

export default VisibilityControl