import users from "@/app/mock-data/users";
import { NextResponse } from "next/server";

// export async function GET(req, obj) {
//     const myparams = await obj.params
//     console.log(myparams.id)
//     return NextResponse.json({ message: 'by id' })
// }

export async function GET(req, { params }) {
    const id = (await params).id
    const user = users.find(tmpUser => tmpUser.id === +id)
    if (!user) {
        return NextResponse.json({ error: `User ${id} not found` }, { status: 404 })
    }
    return NextResponse.json(user)
}