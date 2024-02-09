'use client'
import { TitleSection } from '@/app/components/UI/titleSection'
import { CardComponent } from '@/app/catalog/components/card'
import { useCatalogStore } from '@/app/store/catalogStore'
import s from './style.module.css'
export const CatalogSection = () => {
    const getCatalogData = useCatalogStore((state) => state.getCatalogData())
    return (
        <section className={s.catalogSection}>
            <TitleSection>Наш каталог</TitleSection>
            <CardComponent listData={getCatalogData} />
        </section>
    )
}