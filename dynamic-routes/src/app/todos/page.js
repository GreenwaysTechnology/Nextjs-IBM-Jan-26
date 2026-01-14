import TODOS from "@/app/mock-data/todos"
import Link from "next/link"

//function which returns data
export async function fetchTodos() {
    return TODOS //Promise.resolve(Todos)
}

export default async function TodosMasterPage() {
    const todos = await fetchTodos()
    return <div>
        <ul>
            {todos.map(todo => {
                return <li key={todo.id}>
                    {/* /todos/1 todos/2 */}
                    <Link href={{ pathname: `/todos/${todo.id}` }}>
                        <span>{todo.title}</span>
                    </Link>

                </li>
            })}
        </ul>
    </div>
}