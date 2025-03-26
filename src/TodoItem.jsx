import Button from "./Button"
import css from './App.module.css'
import clsx from "clsx"
export default function TodoItem ({todo, onDelete}) {


    return (
        <li className={clsx(css.listItem)}>
            <p>{todo.task}</p>
            <Button onClick ={()=> onDelete (todo.id)} variant="delete">Delete</Button>
        </li>
        
    )
}