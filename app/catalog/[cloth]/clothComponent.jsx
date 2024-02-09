'use client'
import { useCatalogStore } from '@/app/store/catalogStore'
import s from './style.module.css'
import { CardComponent } from '@/app/catalog/components/card'
import { BreadCrumbs } from '@/app/components/breadCrumbs'
export const ClothComponent = ({ cat }) => {
    const getClothData = useCatalogStore((state) => state.getClothData(cat))

    let listData = []

    if (getClothData.length !== 0) {
        const titleCategory = getClothData[0].title
        listData = getClothData[0].cloth
        listData.forEach((el) => el.category = titleCategory)
    }


    return (
        <div className={`${s.category}`}>
            <BreadCrumbs breadCrumbs={[{ title: 'Каталог', path: `/catalog` }]} />
            <h1 className={`${s.titleCategory}`}>{getClothData.length !== 0 ? getClothData[0].title : null}</h1>
            <CardComponent listData={listData} />

        </div>
    )
}