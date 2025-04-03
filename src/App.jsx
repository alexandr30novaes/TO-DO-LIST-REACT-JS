import { useState, useEffect } from "react"


import TaskInput from "./components/TaskInput"
import TaskList from "./components/TaskList"

function App() {



  return (
    <>
      <div className="container">
        <div className="logo">
          <img src="/logo-list.png" alt="Logo" />
          <h1>Lista de Tarefas</h1>
        </div>
        <div className="line">
          <div className="container-line">
            <TaskInput />
            <TaskList />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
