'use client'
import { useEffect, useState } from 'react';
import { BtnClose } from '../UI/btnClose';
import s from './style.module.css'
export const ModalWindow = ({ onClick, children, isVisible, setIsVisible, title }) => {
    const [actionClose, setActionClose] = useState(isVisible)
    const DALAY = 700

    const closeWindow = ()=>{
         setActionClose(false)
                setTimeout(() => {
                    setIsVisible(false)
                }, DALAY);
    }

    useEffect(() => {
        document.body.style.overflowY = 'hidden'
        return () => {
            document.body.removeAttribute('style')
        }
    })

    return (
        <dialog
         style={{ '--custom-transition': `${DALAY - 100}ms` }}
         className={`${s.modalWindow} ${actionClose ? s.open : s.close} `}
         >
            <div className={`${s.content}`}>
                <h3 className={`${s.title}`}>{title}</h3>
                {children}
            </div>
            <BtnClose onClick={closeWindow} />

        </dialog>
    )
}