'use server'

import { redirect } from "next/navigation"

//version: 1
// export async function createUser() {

//     return {
//         success: true, message: 'Data Saved Successfully'
//     }
// }

//version 2 : take input data
// export async function createUser(data) {
//     console.log(data)
//     return {
//         success: true, message: 'Data Saved Successfully'
//     }
// }
//version 3: forward to the success page
export async function createUser(data) {
    //process the data
    console.log(data)
    console.log(data.get('name'), data.get('email'))
    //redirect to success page
    // redirect('/success')    
    redirect(`/success?name=${encodeURIComponent(data.get("name"))}&email=${encodeURIComponent(data.get("email"))}`);

}