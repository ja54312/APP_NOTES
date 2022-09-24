import { useState ,useEffect } from "react";
import "./App.css";
import TaskCreator from "./components/taskCreator";
import TaskTable from "./components/taskTable";
import VisibilityControl from "./components/VisibilityControl";

function App() {
  const [taskItems, setTaskItems] = useState([]);
  const[showCompleted,setShowCompleted] = useState(false)

  const createNewTask = (taskName) => {
    if (!taskItems.find((task) => task.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }]);
    }
  };

  const toogleTask = task => {
    setTaskItems(
      taskItems.map(t => (t.name === task.name)?{...t,done:!t.done}:t)
    )
  }

  const cleanTask = () => {
    setTaskItems(taskItems.filter(task => !task.done))
    setShowCompleted(false)
  }

  useEffect(()=>{
    let data = localStorage.getItem('tasks') 
    if(data){
      setTaskItems(JSON.parse(data))
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify(taskItems))
  },[taskItems])

  return (
    <div className="App">
      <TaskCreator createNewTask={createNewTask} />
      <TaskTable tasks={taskItems} toogleTask={toogleTask}/>
       <VisibilityControl setShowCompleted={(checked) => setShowCompleted(checked)} cleanTask={cleanTask} isChecked={showCompleted}/>
      {showCompleted && <TaskTable tasks={taskItems} toogleTask={toogleTask} showCompleted={showCompleted}/>}
    </div>
  );
}

export default App;
