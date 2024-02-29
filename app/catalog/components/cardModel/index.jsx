import Link from 'next/link'
import Image from 'next/image'
import { strToPath } from '@/app/helper'
import s from './style.module.css'
import NotFound from '@/app/not-found'
import Loading from '@/app/loading'
export const CardModelComponent = ({ listData = [] }) => {
    const path = ({ category = null, title, clothTitle = null }) => {
        return `/catalog/${strToPath(category)}/${strToPath(clothTitle)}/${strToPath(title)}`
    }
    return (
        <ul className={`${s.catalogList}`}>

            {listData.length !== 0 ?
                listData.map(({ title = '', imgCover = '', category = '', clothTitle = '', id, color = [], size = [] }) => (
                    <Link
                        key={id}
                        className={`${s.catalogCard}`}
                        href={path({ title, category, clothTitle })}
                    >
                        <Image className={`${s.img}`} src={imgCover || '/imgs/no-photo.png'} width={300} height={300} alt={title} />
                        <div className={`${s.info}`}>
                            <h4 className={`${s.title}`}>{title}</h4>
                            <ul className={`${s.clothColors}`}>
                                <p className={`${s.infoTitle}`}>Цвета:</p>
                                {color.map(({ color }, idx) => <li key={idx} style={{ '--clothColor': color }} className={`${s.clothColor}`}></li>)}

                            </ul>
                            <ul className={`${s.clothSizes}`}>
                                <p className={`${s.infoTitle}`}>Размеры:</p>
                                {size.map((size, idx) => <li key={idx} className={`${s.clothSize}`}>{size}</li>)}

                            </ul>
                        </div>
                    </Link>
                )) :
                <Loading />
            }

        </ul>
    )
}