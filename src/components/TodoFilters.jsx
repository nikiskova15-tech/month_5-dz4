import { filterTodos, useTodoStore } from "../store/useTodoStore"

const FILTERS = [
    { value: 'all', label: 'Все' },
    { value: 'active', label: 'Активные' },
    { value: 'completed', label: 'Выполненные' }
]

export default function TodoFilters() {
    const { filter, setFilter } = useTodoStore()
    const { todos } = useTodoStore()
    const { filteredTodos, setFilteredTodos } = useTodoStore()

    return (
        <div style={{ display: 'flex', gap: 8 }}>
            {FILTERS.map((f) => (
                <button
                    key={f.value}
                    onClick={() => {
                        setFilter(f.value);
                        setFilteredTodos(filterTodos(todos, f.value))
                    }}
                    style={{ fontWeight: filter === f.value ? 700 : 400, color: filter === f.value ? 'green' : 'red' }}
                >
                    {f.label}
                </button>
            ))}
        </div>
    )
}