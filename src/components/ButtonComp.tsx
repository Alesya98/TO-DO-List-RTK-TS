import { useAppDispatch } from "../hooks/hook"
import { filter } from "../redux/filterSlice"

export const ButtonComp = () => {

    const dispatch = useAppDispatch()

    return (
        <div style={{ display: "flex", gap: "20px", justifyContent: "space-between" }}>
            <button className="search-btn" onClick={() => dispatch(filter("active"))}>
        Активные
      </button>
      <button className="search-btn" onClick={() => dispatch(filter("done"))}>
        Готовые
      </button>
      <button className="search-btn" onClick={() => dispatch(filter("all"))}>
        Все
      </button>
        </div>
    )
}