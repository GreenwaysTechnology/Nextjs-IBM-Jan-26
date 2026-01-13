'use client'
import { useState } from "react"

// import CounterHeader from "@/app/patterns/clientusesserver/components/CounterHeader";

export function Counter(props) {
    const [counter, setCounter] = useState(0)
    return <div>
        {/* Server Component: Client Component uses another Server Component */}
        {/* <CounterHeader /> */}
        {props.children}
        <h1>Counter : {counter}</h1>
        <button onClick={() => {
            setCounter(counter + 1)
            console.log(counter)
        }}>+</button>
    </div>
}
