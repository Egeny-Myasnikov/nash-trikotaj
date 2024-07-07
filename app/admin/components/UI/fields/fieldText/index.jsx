'use client'
import { useState } from 'react'
import s from './style.module.css'
export const FieldText = ({ className = '', required, name, placeholder, defaultValue }) => {
    const [value, setValue] = useState(defaultValue)
    return (
        <input
            type="text"
            className={`${s.fieldText} ${className}`}
            required={required}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />

    )
}