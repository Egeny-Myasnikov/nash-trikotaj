'use client'
import s from './style.module.css'
import { useCatalogStore } from '@/app/store/catalogStore'
import { CardComponent } from '@/app/catalog/components/card'
export const CatalogSection = () => {
    const getCatalogData = useCatalogStore((state) => state.getCatalogData())

    return (
        <div className={`${s.catalogSection}`}>
            <h1 className={`${s.titleCatalogSection}`}>Каталог</h1>

            <CardComponent listData={getCatalogData} />
        </div>
    )
}