'use client'

import { Logo } from '@/app/components/logo'
import s from './style.module.css'
import { CastomLink } from '@/app/components/UI/castomLink'
import { ContactsBlock } from '@/app/components/contactsBlock'

const links = [
    { href: '/catalog', text: 'Каталог' },
    { href: '/contacts', text: 'Контакты' },
]

export const Footer = () => {
    return (
        <footer className={`${s.footer}`}>

            <div className={`${s.footerWrapper}`}>
                <div>
                    <Logo />
                </div>
                {/* navigation */}
                <nav className={`${s.nav}`}>
                    {links.map(({ text, href }, idx) => (
                        <CastomLink key={idx} href={href} text={text} />
                    ))}
                </nav>

                {/* contactBlock */}

                <ContactsBlock />
            </div>
        </footer>
    )
}