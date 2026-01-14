import Link from "next/link"

//api to fetch data
export async function fetchPosts() {
    const url = `https://jsonplaceholder.typicode.com/posts`
    const response = await fetch(url)
    return response.json()
}

export default async function PostsMasterPage() {
    const posts = await fetchPosts()
    return <div>
        <ul>
            {posts.map(post => {
                return <li key={post.id}>
                    <Link href={{ pathname: `/posts/${post.id}` }}>
                        <span>{post.title}</span>
                    </Link>
                </li>
            })}
        </ul>
    </div>
}