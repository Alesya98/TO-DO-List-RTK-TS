import { useState } from "react"
import { useAppDispatch } from "../hooks/hook"
import { addTask } from "../api/taskAPI";


export const InputTask = () => {
    const [text, setText] = useState<string>('')
    const [error, setError] = useState<string>('');
    const dispatch = useAppDispatch();


    const handleClick = () => {
        console.log('нажата кнопка добавить >>>')
        if (text.trim() === '') {
            setError("Нельзя добавить пустую задачу")
            return
        }
        setError('')
        dispatch(addTask(text))
        setText('')
    }
   
    return (
        <div style={{ marginBottom: "10px" }}>
            <input className="search" type="text" placeholder="Введите задачу"
                value={text} onChange={(e) => setText(e.target.value)} />
            <button className="search-btn" onClick={handleClick} >Добавить</button>

            {error && <p style={{ color: "red", fontSize: "12px" }}>{error}</p>}
        </div>
    )
}