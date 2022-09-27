import { useState } from "react";


const TaskCreator = ({ createNewTask }) => {
  const [newTaskName, setNewTaskName] = useState("");

  const handleSubmit = (e) => {
    //para evitar el refrescar la pagina
    e.preventDefault();
    createNewTask(newTaskName);
    //localStorage.setItem("task", newTaskName);
    setNewTaskName("");
  };

  return (
        <div className="container-Taskcreator">
          <span>Agrega tus Tareas</span>
          <form onSubmit={handleSubmit}>
            <input
              className="Taskcreator-input"
              type="text"
              placeholder="Ingresa una nueva tarea"
              value={newTaskName}
              onChange={(e) => setNewTaskName(e.target.value)}
            />
            <button>Guardar</button>
          </form>
        </div>
  );
};

export default TaskCreator;
