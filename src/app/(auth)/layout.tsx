'use client' 

import Link from "next/link"
import { usePathname } from "next/navigation"
import "./styles.css"

const navLinks = [
  { name: "Register", href: '/register' },
  { name: "Login", href: '/login' },
  { name: "Forgot Password", href: '/forgot-password' },
]

export default function AuthLayout({ children }: { children: React.ReactNode }) {

  const pathname = usePathname()
  
  return (
    <div>
     { navLinks.map((link) => {
        const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/")
        return (
          <Link href={link.href} key={link.name} className={isActive ? "font-bold text-pink-600 mr-2" : "text-blue-600 mr-2"}>
            { link.name }
          </Link>
        )
     })}  
     { children }
    </div>
  )
}