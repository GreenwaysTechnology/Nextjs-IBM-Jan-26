'use client'

import { createUser } from "@/app/actions/userAction"
import { isRedirectError } from "next/dist/client/components/redirect-error"

export default function UserForm() {
    async function handleSubmit(e) {
        e.preventDefault()
        //invoke server actions
        try {
            const result = await createUser()
            alert(JSON.stringify(result))
        }
        catch (err) {
            if (isRedirectError(err)) throw err
        }
    }
    return <form onSubmit={handleSubmit}>
        <div>
            <input type="text" name="name" placeholder="name" required />
        </div>
        <div>
            <input type="email" name="email" placeholder="email" required />
        </div>
        <div>
            <button type="submit">Create User</button>
        </div>
    </form>
}