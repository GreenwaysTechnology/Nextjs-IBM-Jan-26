
//route segmentation options
export const fetchCache = 'force-no-store'
// export const fetchCache = 'force-cache'
export const revalidate = 2


export async function getTime() {
    //const url ='https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata'
    const url = "http://localhost:8080/api/timezone/Asia/Kolkata"
    //enable cache
    const response = await fetch(url, { cache: 'force-cache', next: { revalidate: 2 } })
    const data = await response.json()
    return data
}
export default async function TimeCachePage() {
    const data = await getTime()
    return <div className="m-20">
        <h1 className="font-bold">Time Now : {new Date(data.datetime).toLocaleTimeString()}</h1>
    </div>
}