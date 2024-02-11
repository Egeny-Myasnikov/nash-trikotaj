'use client'
import { useRef, useState } from 'react'
import s from './style.module.css'
export const DropDownList = ({ children, btnText }) => {
    const [isOpen, setIsOpen] = useState(false)
    const childrenRef = useRef(null)

    const changeVisible = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={`${s.dropDounList || ''}`}>
            <button onClick={changeVisible} className={`${s.btn} ${isOpen ? s.open : ''}`}>
                {btnText}
            </button>
            <div ref={childrenRef} className={`${s.children} ${isOpen ? s.open : ''}`}>
                {children}
            </div>


        </div >
    )
}