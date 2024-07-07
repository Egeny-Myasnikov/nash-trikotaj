'use client'
import s from './style.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { path } from '@/app/helper'
import Loading from '@/app/loading'
export const CardComponent = ({ listData, quantity, titleCategory }) => {
    const data = quantity ? [...listData.slice(0, quantity)] : [...listData]
    return (
        <ul className={`${s.catalogList}`}>

            {data.length !== 0 ?
                data.map(({ title = '', imgCover = '', clothTitle = '', id }) => (
                    <Link
                        key={id}
                        className={`${s.catalogCard}`}
                        href={path({ title, category: titleCategory, clothTitle, id })}>
                        <Image className={`${s.img}`} src={imgCover.slice(6) || '/imgs/no-photo.png'} width={300} height={300} alt={title} />
                        <h4 className={`${s.title}`}>{title}</h4>
                    </Link>
                )) :
                <Loading />
            }

        </ul>
    )
}