import { useTodoStore } from "../store/useTodoStore"
import TodoItem from "./TodoItem"


export default function TodoList() {

    const { filteredTodos } = useTodoStore()

    if (filteredTodos.length === 0) return <p>Задач нет</p>

    return (
        <ul>
            {filteredTodos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    )
}