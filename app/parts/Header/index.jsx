'use client'
import { Logo } from '@/app/components/logo'
import { CastomLink } from '@/app/components/UI/castomLink'
import { ContactsBlock } from '@/app/components/contactsBlock'
import { useEffect, useState } from 'react'
import s from './style.module.css'
import Link from 'next/link'

const links = [
    { href: '/catalog', text: 'Каталог' },
    { href: '/contacts', text: 'Контакты' },
]
export const Header = () => {
    const [isActive, setIsActive] = useState(false)

    const closeNav = () => {
        isActive && setIsActive(false)
    }
    useEffect(() => {
        if (isActive) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.removeAttribute('style')
        }
        return () => {
            document.body.removeAttribute('style')
        }
    }, [isActive])

    return (
        <header className={`${s.header}`}>
            <div className={`${s.headerWrapper} ${isActive ? s.active : ''}`}>

                {/* logo */}
                <Logo onClick={closeNav} className={s.logo} />

                {/* navigation */}
                <nav className={`${s.nav} ${isActive ? s.active : ''}`}>
                    {links.map(({ text, href }) => (
                        <CastomLink onClick={closeNav} key={text} href={href} text={text} />
                    ))}
                </nav>

                {/* contactBlock */}
                <div className={`${s.contactBlock} ${isActive ? s.active : ''}`}>
                    <ContactsBlock />
                </div>
                <Link className={`${s.contacts__tel}`} href='tel:+79001658659' title="Позвонить" >+7(900) 165-86-59</Link>


                {/* button open/close menu */}
                <button
                    onClick={() => setIsActive(!isActive)}
                    className={`${s.headerBurger} ${isActive ? s.active : ''}`}
                >
                </button>

            </div>
        </header >
    )
}