import { useState } from "react"
import type { TaskType } from "../types/task"
import { useAppDispatch } from "../hooks/hook"
import { checkTask, editTask, removeTask } from "../api/taskAPI"

type TaskProps = {
    task:TaskType
}

export const Task = ({ task }: TaskProps) => {
    const [isEdit, setIsEdit] = useState<boolean>(false)
    const [editText, setEditText] = useState<string>(task.title)
    const dispatch = useAppDispatch()

    const hendelSend = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            if (editText.trim() === '') {
                setEditText(task.title)
                setIsEdit((isEdit) => !isEdit);
                return
            }
              editTitle(editText);
            setIsEdit((isEdit) => !isEdit);
        }
    }

    const deleteTask = (id:string) => {
       dispatch(removeTask(id))
    }
    
    const checkedTask = (id: string) => {
        dispatch(checkTask(id))
    }

    const editTitle = (editText:string) => {
    dispatch(editTask({ id: task.id, newTitle: editText }));
  };


    return (
        <div className="task">
            <input className="task-check" type="checkbox" checked={task.isCompleted} onChange={() => checkedTask(task.id)} />
            
             {!isEdit ? (
        <p className={task.isCompleted ? "check" : ""}>{task.title}</p>
      ) : (
        <input
          value={editText}
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => setEditText(e.target.value)}
          onKeyDown={hendelSend}
        />
            )}
            
              <div className="btn">
        <button
          className="btn-task"
          onClick={() => setIsEdit((isEdit) => !isEdit)}
        >
          ✏️
        </button>
        <button className="btn-task" onClick={() => deleteTask(task.id)}>
          ❌
        </button>
      </div>
        </div>
    )
}