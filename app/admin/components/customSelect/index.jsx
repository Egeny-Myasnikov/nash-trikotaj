'use client'
import Image from 'next/image'
import s from './style.module.css'
export const CustomSelect = ({ selectList, getTitle, getId, name }) => {

    const radio = (e, title) => {
        getId(+(e.target.value))
        getTitle(title)
    }
    return (
        <ul className={`${s.list}`}>
            {
                selectList?.map(({ title, id, imgCover }) => (
                    <li key={id} className={`${s.item}`}>
                        <input className={`${s.radio}`} type="radio" name={name} id={id} value={id} onChange={(e) => radio(e, title)} />
                        <label className={`${s.label}`} htmlFor={id}>
                            {title}
                        </label>
                        <Image src={imgCover.slice(6)} width={100} height={100} />
                    </li>

                ))
            }
        </ul>
    )
}