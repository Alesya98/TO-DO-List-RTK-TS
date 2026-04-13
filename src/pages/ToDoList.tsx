import { Task } from "../components/Task"
import { useAppSelector } from "../hooks/hook"
import { selectFilter } from "../redux/filterSlice"
import { selectTask } from "../redux/taskSlice"

export const ToDoList = () => {

    const data = useAppSelector(selectTask)
    const valueFilter = useAppSelector(selectFilter)

    const filteredTasks = data ? data.filter((item) => {
        if (valueFilter === "active") return !item.isCompleted;
        if (valueFilter === "done") return item.isCompleted;
        return true;
    }) : [];

    return (
        <div className="tasks">
             {filteredTasks.length === 0 && (
        <h3>Добавь задачу, которую нужно выполнить </h3>
      )}
            {filteredTasks.map(item => (
          <Task key={item.id} task={item} />
            )
                
            )}
        </div>
    )
}