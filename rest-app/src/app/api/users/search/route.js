import { NextResponse } from "next/server";

export async function GET(req){
    const { searchParams } = new URL(req.url)
    const email = searchParams.get("email")
    //filter data based on email:
    return NextResponse.json({ email })
}