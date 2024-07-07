'use client'
import s from './style.module.css'
import { useContext } from 'react'
import { BreadCrumbs } from '@/app/components/breadCrumbs'
import { CardModelComponent } from '../../components/cardModel'
import { ListClothContext } from '@/app/providers'
export const ModelComponent = ({ cloth, model, id }) => {

    const { clothsContext: { clothList }, typesContext: { typeList }, categoryesContext: { categoryList } } = useContext(ListClothContext)
    const data = clothList.filter(({ typeId }) => typeId === id)
    const titleType = typeList.filter((type) => type.id === id)[0]?.title
    const clothId = cloth.split('%20')[1]
    const [currentCategory] = categoryList.filter(cat => cat.id === +clothId)
    return (
        <div className={`${s.category}`}>
            <BreadCrumbs breadCrumbs={[
                { title: 'Каталог', path: `/catalog` },
                { title: currentCategory?.title, path: `/catalog/${cloth}` },
            ]} />
            <h1 className={`${s.titleCategory}`}>{titleType}</h1>
            <CardModelComponent cloth={cloth} model={model} listData={data} />

        </div>
    )
}