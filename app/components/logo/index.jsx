import Link from 'next/link'
import s from './style.module.css'
export const Logo = ({onClick}) => {
    return (
        <Link onClick={onClick} href={'/'} className={`${s.logo}`}>
        <p>Наш</p>
        <p>трикотаж</p>
    </Link>
    )
}