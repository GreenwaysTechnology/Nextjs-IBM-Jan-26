'use client'
import { useState } from "react"

export default function Counter() {
    const [value, setValue] = useState(0)
    const onIncrement = () => {
        setValue(value + 1)
    }
    return <div>
        <h1>Counter : {value}</h1>
        <button onClick={onIncrement}>+</button>
    </div>
}