'use client'
import s from './style.module.css'
import { CardComponent } from '@/app/catalog/components/card'
import { BreadCrumbs } from '@/app/components/breadCrumbs'
import { useContext } from 'react'
import { ListClothContext } from '@/app/providers'
export const ClothComponent = ({ id }) => {

    const { typesContext: { typeList }, categoryesContext: { categoryList } } = useContext(ListClothContext)
    const typesFromCategoryId = (id) => typeList.filter(({ catalogId }) => catalogId === id)
    const titleCategory = (catId) => categoryList.filter(({ id }) => catId === id)
    const category = `${titleCategory(+id)[0]?.title}%20${titleCategory(+id)[0]?.id}`
    return (
        <div className={`${s.category}`}>
            <BreadCrumbs breadCrumbs={[{ title: 'Каталог', path: `/catalog` }]} />
            <h1 className={`${s.titleCategory}`}>{titleCategory(+id)[0]?.title}</h1>
            <CardComponent listData={typesFromCategoryId(+id)} titleCategory={category} />

        </div>
    )
}