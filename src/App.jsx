

import { useState } from 'react'

import TodoItem from './TodoItem';
import Button from './Button';
import css from './App.module.css'
import clsx from 'clsx';

function App() {

const [task, setTask] = useState('');
const [todos, setTodos] = useState([])

const handleAddClick = () => {
  setTodos([...todos, {
    "id": crypto.randomUUID(),
    "task": task
  }]);
  setTask('')
}

const handleDeleteClick = (id) => {

  setTodos(todos.filter((todo) => {
    return todo.id !== id; 
  }))

}
  return (
    <div className={clsx(css.container)}>
     <h2 className={clsx(css.title)}>To-Do List</h2>
     <div className={clsx(css.content)}>
      <input type="text"  value={task} onChange ={(e) => setTask(e.target.value)} className={css.input}/>
      <Button onClick={handleAddClick} variant="add">Add</Button>
     </div>
      <ul className={clsx(css.list)}>
        {todos.map((todo) => {
         return (
          <TodoItem todo={todo} key={todo.id} onDelete={handleDeleteClick}/>
         )
        
        })}
      
      </ul>
    </div>
  )
}

export default App
