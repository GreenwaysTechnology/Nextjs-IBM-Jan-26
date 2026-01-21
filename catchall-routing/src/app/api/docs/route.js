import { NextResponse } from "next/server"

const docs = {
  "getting-started": {
    title: "Getting Started",
    content: "Here’s how to get started"
  },
  "advanced": {
    title: "Advanced",
    content: "This is advanced content"
  },
  "mid": {
    title: "Mid Level",
    content: "This is mid content"
  }
}

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const path = searchParams.get("path")

  const doc = docs[path]

  if (!doc) {
    return NextResponse.json(
      { error: "Not found" },
      { status: 404 }
    )
  }
  return NextResponse.json(doc)
}
