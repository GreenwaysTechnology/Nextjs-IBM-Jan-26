'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import '@/app/links.css'

export default function Menu() {
    const pathname = usePathname()
    console.log(pathname)
    return <nav>
        <ul>
            <li>
                <Link className={`${pathname === '/about' ? 'active' : ''}`} href={{ pathname: '/about' }}>About</Link>
            </li>
            <li>
                <Link className={`${pathname === '/contact' ? 'active' : ''}`} href={{ pathname: '/contact' }}>Contact</Link>
            </li>
             <li>
                <Link className={`${pathname === '/dashboard' ? 'active' : ''}`} href={{ pathname: '/dashboard' }}>Dashboard</Link>
            </li>
        </ul>
    </nav>
}