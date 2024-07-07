'use client'
import s from './style.module.css'
export const Title = ({ className = '', children }) => {
    return (
        <h4 className={`${s.title} ${className}`}>{children}</h4>
    )
}