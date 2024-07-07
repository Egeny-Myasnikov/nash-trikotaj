'use client'
import Image from 'next/image'
import s from './style.module.css'
import { useContext } from 'react'
import { BreadCrumbs } from '@/app/components/breadCrumbs'
import Loading from '@/app/loading'
import { ListClothContext } from '@/app/providers'
import { strToPath } from '@/app/helper'
export const SingleModelComponent = ({ cloth = '', model = '', id }) => {
    const { clothsContext: { clothList }, typesContext: { typeList }, categoryesContext: { categoryList } } = useContext(ListClothContext)
    const data = clothList.filter((cloth) => cloth.id === id)[0]
    const currentModelTitle = model.split('%20')[0]
    const currentCategoryId = cloth.split('%20')[1]
    const [currentType] = typeList.filter(type => strToPath(type.title) === currentModelTitle)
    const [currentCategory] = categoryList.filter(cat => cat.id === +currentCategoryId)
    const bigPhoto = (e) => {
        if (e.target.classList.contains(s.img)) {
            e.target.parentElement.classList.toggle(s.showBig)
        }
    }

    return (
        <>
            {data ?
                (
                    // style={{ '--colorBorder': `${color[idxColor].color}22` }}
                    <div className={`${s.singleModelComponent}`}>

                        <BreadCrumbs breadCrumbs={[
                            { title: 'Каталог', path: `/catalog` },
                            { title: currentCategory?.title, path: `/catalog/${cloth}` },
                            { title: currentType?.title, path: `/catalog/${cloth}/${model}` },
                        ]} />


                        <div className={`${s.card}`}>
                            <div onClick={(e) => bigPhoto(e)} className={`${s.imgWrap}`}>
                                <Image
                                    priority
                                    className={`${s.img}`}
                                    src={data.imgCover.slice(6) || 'imgs/no-photo.png'}
                                    width={300}
                                    height={300}
                                    alt={data.title}
                                />
                            </div>
                            <div className={`${s.info}`}>
                                <h1 className={`${s.title}`}>{data.title}</h1>
                                <div className={`${s.size}`}>
                                    <h4 className={`${s.sizeTitle}`}>Размеры:</h4>
                                    <ul className={`${s.sizeList}`}>

                                        {data.size}
                                    </ul>
                                </div>
                                <div className={`${s.color}`}>
                                    <h4 className={`${s.colorTitle}`}>Цвета:</h4>
                                    <ul className={`${s.colorList}`}>

                                        <li
                                            style={{ '--color': data.color }}
                                            className={`${s.colorItem}`}
                                        ></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <p className={`${s.description}`}>
                            {data?.description}
                        </p>

                    </div>
                )
                : <Loading />
            }
        </>
    )
}
