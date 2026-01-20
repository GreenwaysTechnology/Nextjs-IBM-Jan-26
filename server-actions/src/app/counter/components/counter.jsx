'use client'
import { increment } from "@/app/actions/counterAction"
import { useState, useTransition } from "react"

export default function Counter({ initalCount = 0 }) {

    //declare local state which may hold server actions value
    const [count, setCount] = useState(initalCount)
    const [isPending, startTransition] = useTransition()

    const handleIncrement = () => {
        //invoke server actions
        startTransition(async () => {
            const newCount = await increment()
            setCount(newCount)
        })
    }
    return <div>
        <h1>{isPending ? 'Updating' : `Count :${count} `}</h1>
        <button onClick={handleIncrement} disabled={isPending}>+</button>
    </div>

}