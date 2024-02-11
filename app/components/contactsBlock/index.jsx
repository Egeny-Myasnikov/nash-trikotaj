import s from './style.module.css'
import { SocIcons } from '../socIcons'
import Link from 'next/link'
export const ContactsBlock = () => {

    return (
        <div className={`${s.contacts}`}>
            <address className={s.address}>
                <p>г. Саратов, Крымская, 5</p>
                <Link className={`${s.contacts__tel}`} href='tel:+79001658659' title="Позвонить" >+7(900) 165-86-59</Link>
            </address>
            <SocIcons />
        </div>
    )
}