import { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    if (taskText.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: taskText, completed: false }]);
    }
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const toggleTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <>
      <div className="container">
        <div className="logo">
          <img src="/logo-list.png" alt="Logo" />
          <h1>Lista de Tarefas</h1>
        </div>
        <div className="line">
          <div className="container-line">
            <TaskInput onAddTask={addTask} />
            <TaskList 
              tasks={tasks} 
              onRemoveTask={removeTask} 
              onToggleTask={toggleTask} 
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
