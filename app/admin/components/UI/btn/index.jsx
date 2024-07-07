'use client'
import s from './style.module.css'
export const Btn = ({ type = 'button', onClick, children, className = '' }) => {
    return (
        <button
            type={type}
            className={`${s.btn} ${className}`}
            onClick={onClick}
        >{children}</button>
    )
}