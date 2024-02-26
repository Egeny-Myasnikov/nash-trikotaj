'use client'
import s from './style.module.css'
import { useCatalogStore } from '@/app/store/catalogStore'
import { CardComponent } from '@/app/catalog/components/card'
import { useLayoutEffect } from 'react'
import Loading from '@/app/loading'
export const CatalogSection = () => {
    const getCatalogData = useCatalogStore((state) => state.getCatalogData())
    const fetchCatalog = useCatalogStore((state) => state.fetchCatalog)
    useLayoutEffect(() => {
        fetchCatalog()
    }, [])
    return (
        <div className={`${s.catalogSection}`}>

            <h1 className={`${s.titleCatalogSection}`}>Каталог</h1>
            {
                getCatalogData ?
                    <CardComponent listData={getCatalogData} /> :
                    <Loading />
            }
        </div>
    )
}