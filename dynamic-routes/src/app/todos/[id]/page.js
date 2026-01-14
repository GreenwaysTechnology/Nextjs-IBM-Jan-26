import TODOS from "@/app/mock-data/todos"

export async function fetchTodosById(id) {
    return TODOS.find(todo => todo.id === id)
}

export default async function TodosDetailPage(props) {
    //console.log(props)
    //const params = props.params
    //console.log('params', params)
    // console.log('params value', params.id)
    const id = (await props.params).id
    console.log(id)
    //since id is string, need to be converted into number
    const todo = await fetchTodosById(+id)
    return <div>
        <h1>{todo.id}</h1>
        <p>{todo.title}</p>
        <h2>{todo.completed ? "done" : "In Progess"}</h2>
    </div>
}