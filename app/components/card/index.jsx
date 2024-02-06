import Link from 'next/link'
import Image from 'next/image'
import { strToPath } from '@/app/helper'
import s from './style.module.css'
import NotFound from '@/app/not-found'
export const CardComponent = ({ listData }) => {

    const path = ({ category = null, title, clothTitle = null }) => {
        return `/catalog/${strToPath(category)}/${strToPath(clothTitle)}/${strToPath(title)}`
    }
    return (
        <ul className={`${s.catalogList}`}>

            {listData.length!==0  ?
                listData.map(({ title = '', imgCover = '', category = '', clothTitle = '' }) => (
                    <Link
                        key={title}
                        className={`${s.catalogCard}`}
                        href={path({ title, category, clothTitle })}>
                        <Image className={`${s.img}`} src={imgCover} width={300} height={300} alt={title} />
                        <h4 className={`${s.title}`}>{title}</h4>
                    </Link>
                )):
                <NotFound/>
            }

        </ul>
    )
}