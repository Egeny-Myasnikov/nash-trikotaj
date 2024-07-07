import s from './style.module.css'
import { ContactsComponent } from '../../components/contacts'
import { TitlePage } from '@/app/components/UI/titlePage'

export const ContactsHero = () => {
    return (
        <section className={`${s.contactsHero}`}>
            <TitlePage>Контакты</TitlePage>
            <ContactsComponent />
        </section>
    )
}