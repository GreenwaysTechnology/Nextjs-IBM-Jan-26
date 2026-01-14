'use client'
import { useRouter } from "next/navigation"

export default function DashBoardNavigator() {
    const router = useRouter()
    console.log(router)
    return <div>
        <button onClick={() => {
            router.push('/about')
        }}>GoTo About Page</button>
    </div>
}