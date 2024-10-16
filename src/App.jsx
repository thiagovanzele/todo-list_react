import { useState } from 'react'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Lista de Tarefas </h1>
      <TaskInput />
      <TaskList />
    </>
  )
}

export default App
