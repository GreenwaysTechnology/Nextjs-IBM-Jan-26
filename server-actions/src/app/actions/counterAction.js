'use server'

let count = 0
export async function increment() {
    //return count // Promise.resolve(count)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(count++)
        }, 1000)
    })
}