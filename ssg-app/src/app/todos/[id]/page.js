
export async function fetchTodosByid(id) {
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`
    const response = await fetch(url)
    return response.json()
}

export async function fetchTodos() {
    const url = `https://jsonplaceholder.typicode.com/todos`
    const response = await fetch(url)
    return response.json()
}

export default async function TodoDetailPage({ params }) {
    const id = (await params).id
    const todo = await fetchTodosByid(+id)
    return <div>
        <h2>id {todo.id}</h2>
        <p>title {todo.title}</p>
        <p>Status {todo.completed ? 'Ok' : 'Not Completed'}</p>
    </div>
}

export async function generateStaticParams() {
    const todos = await fetchTodos()
    //generate html pages for all todos(200 todos), if you have 200 todos, 200 html files to
    //to be generated
    return todos.map(todo => {
        //based on id only the pages are generated, id value must be string
        let id = todo.id.toString()
        return {
            //key: name of the html file if id is one, 1.html 2.html etc...
            id: id
        }
    })
}