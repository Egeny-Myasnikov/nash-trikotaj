
import { CatalogHero } from './sections/catalogHero'

export const metadata = {
    title: 'Каталог',
    description: ' Каталог магазина "ХлопОдежда" предлагает вам купить в Саратове мужскую, женскую, детскую одежду от производителя "Богатырь" по низким ценам',
}


export default async function CatalogPage() {
    return (
        <>
            <CatalogHero />
        </>
    )
}