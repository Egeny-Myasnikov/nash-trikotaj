import s from './style.module.css'
import { CatalogSection } from './sections/catalogSection'

export const metadata = {
    title: 'Каталог',
    description: ' Каталог магазина "ХлопОдежда" предлагает вам купить в Саратове мужскую, женскую, детскую одежду от производителя "Богатырь" по низким ценам',
}

export default function Catalog() {

    return (
        <div className={`${s.cat}`}>

            <CatalogSection />

        </div>
    )
}