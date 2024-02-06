'use client'
import { useEffect, useState } from 'react'
import s from './style.module.css'

export const MyField = ({
    name,
    value,
    onPaste,
    onKeyDown,
    onBlur,
    onChange,
    onInput,
    onFocus,
    type,
    className = '',
    classNamePlaceholder = '',
    placeholder
}) => {
    const [isActive, setIsActive] = useState(false)


    const changeActivityPlaceholder = () => {
        if (value?.trim().length === 0) {
            setIsActive(!isActive)
        }
        onFocus && onFocus()
        onBlur && onBlur()
    }

    useEffect(() => {
        value?.trim().length !== 0 && setIsActive(true)

    }, [value])


    return (
        <div className={`${s.formControl} ${className}`}>
            <input
                name={name}
                onInput={onInput}
                onBlur={changeActivityPlaceholder}
                onFocus={changeActivityPlaceholder}
                onChange={onChange}
                onKeyDown={onKeyDown}
                onPaste={onPaste}
                value={value}
                type={type}
                placeholder={placeholder}
                className={`${s.field} ${className}`}
            />
            <label className={`${s.placeholder} ${isActive ? s.placeholderActive : ''} ${classNamePlaceholder}`}>
                {placeholder}
            </label>


        </div>
    )
}