import todos from '@/app/todos/mock-data/todos'

//component
export default function TodoList() {
    return <ul>
        {todos.map(todo => {
            return <li key={todo.id}>{todo.title}</li>
        })}
    </ul>
}