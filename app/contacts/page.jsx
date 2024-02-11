import { ContactsComponent } from './components/contacts'
import s from './page.module.css'

export default function Contacts() {
    return (
        <section className={`${s.cont}`}>
            <ContactsComponent />
        </section>
    )
}
