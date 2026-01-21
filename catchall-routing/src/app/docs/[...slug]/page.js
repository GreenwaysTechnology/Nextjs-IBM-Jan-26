import { notFound } from "next/navigation"

async function getDocContent(path) {
  console.log(path)
  const res = await fetch(
    `http://localhost:3000/api/docs?path=${path}`
  )
  if (!res.ok) {
    return null
  }
  return res.json()
}

export default async function DocsDetailsPage({ params }) {
  const slug =(await params).slug || []

  // Convert array → string
  const path = slug.join("/")

  // Fetch content from API
  const doc = await getDocContent(path)

  // 404 if no content
  if (!doc) {
    notFound()
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">
        Title : {doc.title}
      </h1>

      <p className="mt-4 text-gray-700">
        {doc.content}
      </p>
    </div>
  )
}
