
// export async function getTime() {
//     const url = "http://localhost:8080/api/timezone/Asia/Kolkata"
//     //enable cache
//     const response = await fetch(url, { cache: 'force-cache'})
//     const data = await response.json()
//     return data
// }
export async function getTime() {
    const url = "http://localhost:8080/api/timezone/Asia/Kolkata"
    //enable cache
    const response = await fetch(url, {
        cache: 'force-cache', next: {
            tags: ['timerTag']
        }
    })
    const data = await response.json()
    return data
}
export default async function TimeCachePage() {
    const data = await getTime()
    return <div className="m-20">
        <h1 className="font-bold">Time Now : {new Date(data.datetime).toLocaleTimeString()}</h1>
    </div>
}