import { notFound } from "next/navigation"

//data
let docs = {
    //path: path content
    "getting-started": "Heres How to get started",
    "advanced": "This is advanced Content",
    "mid" : "This mid content"
}


export default async function DocsDetailsPage({ params }) {
    const slug = (await params).slug

    //extract root path
    const path = slug.join('/')
    //extract content
    const content = docs[path]
    if(!content){
        //throw 404 page
        notFound()
    }
    return <div className="p-6">
         <h1>Docs : {path}</h1>
         <p>{content}</p>
    </div>

}