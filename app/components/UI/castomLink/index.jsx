'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import s from './style.module.css'
import { forwardRef, useEffect, useState } from 'react'

export const CastomLink = forwardRef(({ text, href, onClick }, ref) => {
    const pathname = usePathname()
    const [path, setPath] = useState(null)

    useEffect(() => {
        setPath(pathname)
    }, [pathname])

    return (
        <Link
            onClick={onClick}
            ref={ref}
            key={text}
            className={`${s.link} ${path === href ? s.linkActive : ''}`}
            href={href}>{text}
        </Link>
    )
})