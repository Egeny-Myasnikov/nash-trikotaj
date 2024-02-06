'use client'

import { Logo } from '@/app/components/logo'
import s from './style.module.css'
import { Button } from '@/app/components/UI/button'
import { useState } from 'react'
import { ModalWindow } from '@/app/components/modalWindow'
import { CastomLink } from '@/app/components/UI/castomLink'
import { ContactsBlock } from '@/app/components/contactsBlock'

const links = [
    { href: '/catalog', text: 'Каталог' },
    { href: '/contacts', text: 'Контакты' },
]

export const Footer = () => {
    const [isActive, setIsActive] = useState(false)
    const [isVisibleModalWindow, setIsVisibleModalWindow] = useState(false)

    const showModal = () => {
        closeNav()
        setIsVisibleModalWindow(true)
    }

    const closeNav = () => {
        isActive && setIsActive(false)
    }
    return (
        <footer className={`${s.footer}`}>

            <div className={`${s.footerWrapper} ${isActive ? s.active : ''}`}>
                <div>
                    <Logo />
                </div>
                {/* navigation */}
                <nav className={`${s.nav}`}>
                    {links.map(({ text, href }) => (
                        <CastomLink onClick={closeNav} key={text} href={href} text={text} />
                    ))}
                </nav>

                {/* contactBlock */}

                    <ContactsBlock />
            </div>
        </footer>
    )
}