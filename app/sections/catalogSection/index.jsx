'use client'
import { TitleSection } from '@/app/components/UI/titleSection'
import { CardComponent } from '@/app/catalog/components/card'
import { useCatalogStore } from '@/app/store/catalogStore'
import s from './style.module.css'
import { useContext, useLayoutEffect } from 'react'
import Loading from '@/app/loading'
import { ListClothContext } from '@/app/providers'
export const CatalogSection = () => {
    // const getCatalogData = useCatalogStore((state) => state.getCatalogData())
    // const fetchCatalog = useCatalogStore((state) => state.fetchCatalog)
    // useLayoutEffect(() => {

    //     fetchCatalog()
    // }, [])
    const { categoryesContext: { categoryList } } = useContext(ListClothContext)
    return (
        <section className={s.catalogSection}>
            <TitleSection>Наш каталог</TitleSection>
            {
                categoryList.length !== 0 ?
                    <CardComponent listData={categoryList} quantity={2} /> :
                    <Loading />
            }
        </section>
    )
}