import Link from 'next/link'
import Image from 'next/image'
import { strToPath } from '@/app/helper'
import s from './style.module.css'
import Loading from '@/app/loading'
export const CardModelComponent = ({ listData = [], cloth, model }) => {
    const path = ({ title, id }) => {
        return `/catalog/${cloth}/${model}/${strToPath(title)}%20${id}`
    }
    return (
        <ul className={`${s.catalogList}`}>

            {listData.length !== 0 ?
                listData.map(({ title = '', imgCover = '', id, color = '', size = '' }) => (
                    <Link
                        key={id}
                        className={`${s.catalogCard}`}
                        href={path({ title, id })}
                    >
                        <Image className={`${s.img}`} src={imgCover.slice(6) || '/imgs/no-photo.png'} width={300} height={300} alt={title} />
                        <div className={`${s.info}`}>
                            <h4 className={`${s.title}`}>{title}</h4>
                            <ul className={`${s.clothColors}`}>
                                {!size ? null : (<>
                                    <p className={`${s.infoTitle}`}>Цвет:</p>
                                    <li style={{ '--clothColor': color }} className={`${s.clothColor}`}></li>
                                </>)}

                            </ul>
                            <ul className={`${s.clothSizes}`}>
                                {!size ? null : (
                                    <>
                                        <p className={`${s.infoTitle}`}>Размеры:</p>
                                        <li className={`${s.clothSize}`}>{size}</li>
                                    </>
                                )}
                            </ul>
                        </div>
                    </Link>
                )) :
                'Ничего нет'
            }

        </ul>
    )
}