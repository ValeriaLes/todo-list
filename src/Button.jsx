import css from "./Button.module.css"
import clsx from 'clsx';

export default function Button ({children, onClick, variant}) {
    
    return (
    <button onClick ={onClick} className={clsx(css.btn, css[variant])}>{children}</button>
)
}