import { ContactsComponent } from './components/contacts'
import s from './page.module.css'

export const metadata = {
    title: 'Контакты',
    description: ' Мы находимся по адресу г. Саратов, Крымская, 5, наш телефон: +7(900) 165-86-59. Магазин "ХлопОдежда" предлагает вам купить в Саратове мужскую, женскую, детскую одежду от производителя "Богатырь" по низким ценам',
}

export default function Contacts() {
    return (
        <section className={`${s.cont}`}>
            <ContactsComponent />
        </section>
    )
}
