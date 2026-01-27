import { cookies } from "next/headers"

export default async function Dashboard() {
    // read cookie
   // read cookie
    const cookieStore = await cookies()
    // console.log(cookieStore.get("session").value)
    // const userKey = cookieStore.get("session").value
    const session = cookieStore.get("session")
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            {session ? (
                <>
                    <p>Welcome, user with session: {session.value}</p>
                    <form action="/api/logout" method="post">
                        <button className="bg-red-500 text-white px-4 py-2 rounded mt-4">
                            Logout
                        </button>
                    </form>
                </>
            ) : (
                <p>You are not logged in.</p>
            )}
        </div>
    );

}