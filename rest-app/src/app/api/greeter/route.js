import { NextResponse } from "next/server";

export async function GET() {
    //RETURN response
    return NextResponse.json({
        message: 'Welcome to Rest api'
    }, { status: 200 })
}