'use client'
import { TitleSection } from '@/app/components/UI/titleSection'
import { CardComponent } from '@/app/catalog/components/card'
import { useCatalogStore } from '@/app/store/catalogStore'
import s from './style.module.css'
import { useLayoutEffect } from 'react'
import Loading from '@/app/loading'
export const CatalogSection = () => {
    const getCatalogData = useCatalogStore((state) => state.getCatalogData())
    const fetchCatalog = useCatalogStore((state) => state.fetchCatalog)
    useLayoutEffect(() => {

        fetchCatalog()
    }, [])
    return (
        <section className={s.catalogSection}>
            <TitleSection>Наш каталог</TitleSection>
            {
                getCatalogData.length !== 0 ?
                    <CardComponent listData={getCatalogData} /> :
                    <Loading />
            }
        </section>
    )
}