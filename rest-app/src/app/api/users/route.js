import users from "@/app/mock-data/users";
import { NextResponse } from "next/server";

//get all users
export async function GET() {
    return NextResponse.json(users)
}
export async function POST(req) {
    const payload = await req.json()
    //write biz logic to insert new user into db(array)
    const newUser = {
        id: users.length + 1,
        ...payload
    }
    users.push(newUser)
    return NextResponse.json(newUser, { status: 201 })
}