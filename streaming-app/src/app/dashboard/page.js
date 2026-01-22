import React from "react"

//delay with timer
const Welcome = React.lazy(() => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 10000, import('../components/greeter'))
    })
})
const Hello = React.lazy(() => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 9000, import('../components/hello'))
    })
})
const Hai = React.lazy(() => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 8000, import('../components/hai'))
    })
})


export default function Dashboard() {
    return <div>
        <h1>Header</h1>
        <React.Suspense fallback={<h1>Welocome is loading...</h1>}>
            <Welcome />
        </React.Suspense>
        <React.Suspense fallback={<h1>Hai is loading...</h1>}>
            <Hai />
        </React.Suspense>
        <React.Suspense fallback={<h1>Hello is loading...</h1>}>
            <Hello />
        </React.Suspense>
        <h1>Footer</h1>
    </div>
}