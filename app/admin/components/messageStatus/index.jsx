'use client'
import { useLayoutEffect, useState } from 'react'
import s from './style.module.css'
import { SVGSprite } from '@/app/components/SVGSprite'
export const MessageStatus = ({ message, setMessage }) => {

    const [isVisible, setIsVisible] = useState(false)

    const validateStyle = () => {
        if (message?.status === 'success') return s.messageSuccess
        if (message?.status === 'warning') return s.messageWarning
        if (message?.status === 'error') return s.messageError
        return null
    }
    const validateStyleIcon = () => {
        if (message?.status === 'success') return s.iconSuccess
        if (message?.status === 'warning') return s.iconWarning
        if (message?.status === 'error') return s.iconError
        return null
    }
    const validateIconId = () => {
        if (message?.status === 'success') return 'success'
        if (message?.status === 'warning') return 'warning'
        if (message?.status === 'error') return 'error'
        return null
    }

    const positiveResponse = () => {
        if (message?.callback) message.callback()
        setIsVisible(false)
        setMessage('')
    }
    const negativeResponse = () => {
        setIsVisible(false)
        setMessage('')
    }

    useLayoutEffect(() => {
        if ((!message?.confirmation) && message?.text) {
            setTimeout(() => {
                setIsVisible(true)
                setTimeout(() => {
                    setIsVisible(false)
                    setTimeout(() => {
                        setMessage('')
                    }, 400)
                }, 2000)
            }, 400)

        }

        if (message?.confirmation && message?.text) {
            setIsVisible(true)
        }
        return () => {
        }
    }, [message])
    return (
        <>


            {
                message?.confirmation && message?.text &&
                <p className={`
            ${s.message}
            ${isVisible ? s.messageShow : ''}
            ${validateStyle()}
            `}>
                    <span className={`${s.text}`}>
                        {message?.text}
                    </span>
                    <SVGSprite className={`${s.icon} ${validateStyleIcon()}`} id={validateIconId()} />
                    <button onClick={positiveResponse}>ok</button>
                    <button onClick={negativeResponse}>cancel</button>
                </p>
            }



            {
                message?.text && !message?.confirmation &&
                <p className={`
            ${s.message}
            ${isVisible ? s.messageShow : ''}
            ${validateStyle()}
            `}>
                    <span className={`${s.text}`}>
                        {message?.text}
                    </span>
                    <SVGSprite className={`${s.icon} ${validateStyleIcon()}`} id={validateIconId()} />
                </p>
            }

        </>
    )
}