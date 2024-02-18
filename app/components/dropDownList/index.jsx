'use client'
import { useRef, useState } from 'react'
import s from './style.module.css'
export const DropDownList = ({ children, btnAtiveText, btnNotActiveText = '' }) => {
    const [isOpen, setIsOpen] = useState(false)
    const childrenRef = useRef()

    const changeVisible = () => {
        if (!isOpen) {
            setIsOpen(true)
            setTimeout(() => childrenRef.current && childrenRef.current.classList.add(s.open), 10)
        } else {
            childrenRef.current && childrenRef.current.classList.contains(s.open) && childrenRef.current.classList.remove(s.open)
            setTimeout(() => {
                setIsOpen(false)
            }, 450)
        }
    }

    return (
        <div className={`${s.dropDounList || ''}`}>
            <button onClick={changeVisible} className={`${s.btn} ${isOpen ? s.open : ''}`}>
                {btnNotActiveText ? !isOpen ? btnAtiveText : btnNotActiveText : btnAtiveText}
            </button>
            {isOpen &&
                <div ref={childrenRef} className={`${s.children} `}>
                    {children}
                </div>
            }


        </div >
    )
}