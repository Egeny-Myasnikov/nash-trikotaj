import Link from 'next/link'
import s from './style.module.css'
export const Logo = ({ onClick, className }) => {
    return (
        <Link onClick={onClick} href={'/'} className={`${s.logo} ${className}`}>
            <p>Наш</p>
            <p>трикотаж</p>
        </Link>
    )
}