import { useTodoStore } from "../store/useTodoStore"
import TodoItem from "./TodoItem"


export default function TodoList() {

    const { todos } = useTodoStore()

    if (todos.length === 0) return <p>Задач нет</p>

    return (
        <ul>
            {todos.map((todo) => ( 
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    )
}