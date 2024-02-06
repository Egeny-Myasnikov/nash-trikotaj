'use client'
import s from './style.module.css'
export const Form = ({ onSubmit, children, className = '' }) => {

    const submitHandler = (e) => {
        e.target.preventDefault()
        onSubmit && onSubmit()
    }

    return (
        <form
            onSubmit={submitHandler}
            className={`${s.form || ''} ${className}`}
        >
            {children}
        </form>
    )
}