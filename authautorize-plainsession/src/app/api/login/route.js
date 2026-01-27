import { cookies } from "next/headers"

export async function POST(req) {
    const { username, password } = await req.json()
    //generate sessionid in realtime but now we use dummy sessionId
    if (username === 'admin' && password === '123') {
        const sessionToken = "user-123"
        const cookieStore = await cookies()
        //set cookie information
        cookieStore.set("session", sessionToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            path: '/',
            maxAge: 60 * 60 //1 hour valid
        })
        return Response.json({ success: true })
    }
    return Response.json({ success: false, message: 'invalid credentials' }, { status: 401 })
}