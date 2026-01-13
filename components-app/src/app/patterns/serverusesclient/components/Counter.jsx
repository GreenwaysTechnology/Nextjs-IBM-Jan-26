'use client'
import { useState } from "react"

export function Counter() {
    const [counter, setCounter] = useState(0)
    return <div>
        <h1>Counter : {counter}</h1>
        <button onClick={() => {
            setCounter(counter + 1)
            console.log(counter)
        }} >+</button>
    </div>
}
