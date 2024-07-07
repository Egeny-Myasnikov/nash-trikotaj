'use client'
import s from './style.module.css'
import { useContext } from 'react'
import { TitlePage } from '@/app/components/UI/titlePage'
import { ListClothContext } from '@/app/providers'
import { CardComponent } from '../../components/card'

export function CatalogHero() {
    const { categoryesContext: { categoryList } } = useContext(ListClothContext)
    return (
        <section className={`${s.catalogHero}`}>
            <TitlePage>Каталог</TitlePage>
            {
                categoryList.length === 0 ? <p>Нет категорий</p> :
                    <CardComponent listData={categoryList} />

            }
        </section>
    )
}