'use client'
import Image from 'next/image'
import s from './style.module.css'
import { useCatalogStore } from '@/app/store/catalogStore'
import NotFound from '@/app/not-found'
import { useState } from 'react'
import { BreadCrumbs } from '@/app/components/breadCrumbs'
export const SingleModelComponent = ({ cloth = '', model = '', singleModel = '' }) => {
    const [idxColor, setIdxColor] = useState(0)
    const [idxSize, setIdxSize] = useState(0)

    const getSingleModelData = useCatalogStore((state) => state.getSingleModelData(cloth, model, singleModel))
    let data = []

    getSingleModelData.length !== 0 ?
        data.push(getSingleModelData[0]) :
        data.push({ category: '', clothTitle: '', title: '', imgCover: '', color: [''], size: [''] })

    const { category, clothTitle, title, color, size } = data[0]

    return (
        <>
            {getSingleModelData.length !== 0 ?
                (
                    <div style={{ '--colorBorder': `${color[idxColor].color}22` }} className={`${s.singleModelComponent}`}>

                        <BreadCrumbs breadCrumbs={[
                            { title: 'Каталог', path: `/catalog` },
                            { title: category, path: `/catalog/${cloth}` },
                            { title: clothTitle, path: `/catalog/${cloth}/${model}` },
                        ]} />


                        <div className={`${s.card}`}>
                            <div className={`${s.imgWrap}`}>
                                <Image priority className={`${s.img}`} src={color[idxColor].img} width={300} height={300} alt={title} />
                            </div>
                            <div className={`${s.info}`}>
                                <h1 className={`${s.title}`}>{title}</h1>
                                <div className={`${s.size}`}>
                                    <h4 className={`${s.sizeTitle}`}>Размеры:</h4>
                                    <ul className={`${s.sizeList}`}>
                                        {size.map((size, idx) => (
                                            <li key={idx}>
                                                <button
                                                    onClick={() => setIdxSize(idx)}
                                                    className={`${s.sizeItem} ${idxSize === idx ? s.active : ''}`}
                                                    title={`Размер: ${size}`}
                                                >
                                                    {size}</button></li>
                                        ))}
                                    </ul>
                                </div>
                                <div className={`${s.color}`}>
                                    <h4 className={`${s.colorTitle}`}>Цвета:</h4>
                                    <ul className={`${s.colorList}`}>
                                        {color.map(({ color }, idx) =>
                                        (<li key={idx}>
                                            <button
                                                onClick={() => setIdxColor(idx)}
                                                style={{ '--color': color }}
                                                className={`${s.colorItem} ${idxColor === idx ? s.active : ''}`}
                                                title={`Цвет: ${color}`}
                                            ></button></li>
                                        ))}

                                    </ul>
                                </div>
                            </div>

                        </div>
                        <p className={`${s.description}`}>
                            Exercitationem optio nisi laboriosam autem architecto saepe enim id harum distinctio doloremque delectus consectetur soluta reprehenderit rerum non nostrum, deleniti molestias ratione accusamus. Minima quisquam et eos quaerat quam nobis.</p>
                    </div>
                )
                : <NotFound />
            }
        </>
    )
}