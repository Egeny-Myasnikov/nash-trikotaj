import s from './style.module.css'
import { SocIcons } from '../socIcons'
import Link from 'next/link'
export const ContactsBlock = () => {

    return (
        <div className={`${s.contacts}`}>
            <address className={s.address}>
                <p>г. Саратов, Астраханская 16</p>
                <Link className={`${s.contacts__tel}`} href='tel:+70004400404' title="Позвонить" >8 (000) 440-04-04</Link>
            </address>
            <SocIcons />
        </div>
    )
}