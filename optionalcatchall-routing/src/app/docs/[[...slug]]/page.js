import { notFound } from "next/navigation"

const docs = {
    //path: path Content
    "docs" : "Welcome to Docs Home Page",
    "getting-started": "Heres How to get started",
    "advanced": "This is advanced Guide"
}

export default async function DocsDetailsPage({ params }) {
    const slug = (await params).slug

    const path = slug ? slug.join("/") : "docs"
    const content = docs[path]
    if (!content) {
        notFound()
    }
    return <div className="p-6">
        <h1>Docs :{path}</h1>
        <p>{content}</p>
    </div>
}
