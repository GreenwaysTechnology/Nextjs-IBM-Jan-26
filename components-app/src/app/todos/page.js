// import todos from "./mock-data/todos"
// import todos from '@/app/todos/mock-data/todos'
import TodoList from "@/app/todos/components/todoslist"

// //component
// export function TodoList() {
//     return <ul>
//         {todos.map(todo => {
//             return <li key={todo.id}>{todo.title}</li>
//         })}
//     </ul>
// }

export default function TodosPage() {
    return <TodoList />
}