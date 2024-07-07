'use client'
import s from './style.module.css'
export const FieldNumber = ({ className = '', required = false, name, placeholder = '' }) => {
    return (
        <input
            type="number"
            className={`${s.fieldNumber} ${className}`}
            required={required}
            name={name}
            placeholder={placeholder} />
    )
}