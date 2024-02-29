import Link from 'next/link'
import Image from 'next/image'
import { path } from '@/app/helper'
import s from './style.module.css'
import NotFound from '@/app/not-found'
import Loading from '@/app/loading'
export const CardComponent = ({ listData }) => {

    return (
        <ul className={`${s.catalogList}`}>

            {listData.length !== 0 ?
                listData.map(({ title = '', imgCover = '', category = '', clothTitle = '', id }) => (
                    <Link
                        key={id}
                        className={`${s.catalogCard}`}
                        href={path({ title, category, clothTitle })}>
                        <Image className={`${s.img}`} src={imgCover || '/imgs/no-photo.png'} width={300} height={300} alt={title} />
                        <h4 className={`${s.title}`}>{title}</h4>
                    </Link>
                )) :
                <Loading />
            }

        </ul>
    )
}