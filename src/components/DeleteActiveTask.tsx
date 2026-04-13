import { clearTask } from "../api/taskAPI"
import { useAppDispatch, useAppSelector } from "../hooks/hook"
import { selectTask } from "../redux/taskSlice"

export const DeleteActiveTask = () => {
    const data = useAppSelector(selectTask)
    const dispatch = useAppDispatch()

    const taskLength =data ? data.filter((item) => !item.isCompleted) : [];
    const clearDone =data ? data.filter((item) => item.isCompleted): [];
    
      const clearActive = () => {
          for (const task of clearDone) {
              const id: string = task.id
      dispatch(clearTask(id));
    }
  };

    return (
        <div>
      <p>Осталось дел: {taskLength.length} </p>
      <button
        className="search-btn"
        style={{ marginBottom: "10px" }}
        onClick={clearActive}
      >
        Оистить выполненные: {clearDone.length}
      </button>
    </div>
    )
}