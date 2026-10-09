import { useTodoStore } from "../store/useTodoStore"

const FILTERS = [
    { value: 'all', label: 'Все' },
    { value: 'active', label: 'Активные' },
    { value: 'completed', label: 'Выполненные' }
]

export default function TodoFilters() {
    const { filter, setFilter } = useTodoStore()

    return (
        <div style={{ display: 'flex', gap: 8}}>
            {FILTERS.map((f) => (
                <button
                    key={f.value}
                    onClick={() => setFilter(f.value)}
                    style={{ fontWeight: filter === f.value ? 700 : 400 }}
                >
                    {f.label}
                </button>
            ))}
        </div>
    )
}