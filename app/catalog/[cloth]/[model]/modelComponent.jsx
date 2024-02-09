'use client'
import { useCatalogStore } from '@/app/store/catalogStore';
import s from './style.module.css'
import { CardComponent } from '@/app/catalog/components/card';
import { BreadCrumbs } from '@/app/components/breadCrumbs';
export const ModelComponent = ({ cloth, model }) => {
    const getModelData = useCatalogStore((state) => state.getModelData(cloth, model))
    return (
        <div className={`${s.category}`}>
            <BreadCrumbs breadCrumbs={[
                { title: 'Каталог', path: `/catalog` },
                { title: getModelData[0].model[0].category, path: `/catalog/${cloth}` },
            ]} />
            <h1 className={`${s.titleCategory}`}>{getModelData[0].title}</h1>

            <CardComponent listData={getModelData[0].model} />

        </div>
    )
}