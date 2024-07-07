'use client'

import s from './style.module.css'
export const Logout = ({ action, className }) => {
    return (
        <form action={action}>
            <button className={`${s.logoutBtn} ${className}`} type="submit">Выход</button>
        </form>
    )
}