import { useEffect } from "react"
import { useAppDispatch } from "../hooks/hook"
import { Header } from "./Header"
import { InputTask } from "./InputTask"
import { ToDoList } from "./ToDoList"
import { getTasks } from "../api/taskAPI"
import { ButtonComp } from "../components/ButtonComp"
import { DeleteActiveTask } from "../components/DeleteActiveTask"

export const ToDo = () => {
    const dispatch = useAppDispatch()
    
    useEffect(() => {
        dispatch(getTasks())
    }, [dispatch])
    
    return (
        <>
            <Header />
            <InputTask />
            <ToDoList />
            <ButtonComp />
            <DeleteActiveTask />
        </>
    )
}