'use client'

import { useState } from "react"

//curd operation using array
export default function Post() {
    const [posts, setPosts] = useState([{
        id: 1, title: 'React', body: 'This is react Post'
    },
    {
        id: 2, title: 'Node.js', body: 'This is Node.js Post'
    }
    ])
    //Edit or update status 
    const [isEditing, setIsEditing] = useState(false)
    //to capture form data 
    const [form, setForm] = useState({ title: '', body: '', id: null })

    //onSubmit listener
    const handleSubmit = e => {
        e.preventDefault()
        isEditing ? updatePost() : addPost()
    }
    const updatePost = () => {
        console.log('update Post')
        setPosts(posts.map(post => post.id === form.id ? form : post))
        setIsEditing(false)
        clearForm()
    }
    const addPost = () => {
        console.log('add Post')
        const newPost = { id: posts.length + 1, title: form.title, body: form.body }
        setPosts([...posts, newPost])
        clearForm()
    }
    const clearForm = () => {
        setForm({ title: '', body: '', id: null })
    }
    const handleEdit = (post) => {
        setIsEditing(true)
        setForm({ title: post.title, body: post.body, id: post.id })
    }
    const handleDelete = (id) => {
        setPosts(posts.filter(post => post.id !==id))
    }


    return <div>
        {/* form to add or edit posts */}
        {/* Todo: remove this line of code once the testing is over */}
        {/* {JSON.stringify(form)} */}
        <form onSubmit={handleSubmit}>
            <div>
                <input onChange={(e) => {
                    setForm({ ...form, title: e.target.value })
                }} value={form.title} placeholder="Title" />
            </div>
            <div>
                <textarea value={form.body} onChange={(e) => {
                    setForm({ ...form, body: e.target.value })
                }} placeholder="body" />
            </div>
            <div>
                <button>{isEditing ? " Update" : " Add "} Post</button>
            </div>
        </form>
        <ul>
            {posts.map(post => {
                return <li key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <button onClick={() => {
                        handleEdit(post)
                    }}>Edit</button>
                    <button onClick={() => {
                        handleDelete(post.id)
                    }}>Delete</button>
                </li>
            })}
        </ul>
    </div>
}