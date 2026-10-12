import { useTodoStore } from "../store/useTodoStore"
import { filterTodos  } from "../store/useTodoStore"

export default function TodoStats() {

    const { todos } = useTodoStore()

    return (
        <div>
            <h2>Статистика: </h2>
            <p>Все: {todos.length}</p>
            <p>Активные: {filterTodos( todos, 'active').length}</p>
            <p>Неактивные: {filterTodos( todos, 'completed').length}</p>
        </div>
    )
}