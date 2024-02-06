'use client'
import Image from 'next/image'
import s from './style.module.css'
import { Slider } from '../slider'
export const ReviwesBlock = ({ list }) => {

    const getFirstLettersName = (name) => {
        const [firstName, secondName, ...other] = name.trim().split(' ')
        const letters = firstName.split('')[0] + '' + secondName.split('')[0]
        return letters
    }

    return (

        <Slider>
            {list.map(({ id, avatar, name, role, review }) => (
                <li key={id} className={s.item}>
                    <div className={s.wrap}>
                        <div className={s.avatar}>
                            {avatar ? <Image
                                src={`/imgs/${avatar}`}
                                width={80}
                                height={80}
                                alt={name}
                                loading="lazy"
                            />
                                :
                                <span className={s.letters}> {getFirstLettersName(name)}</span>
                            }
                        </div>
                        <div className={s.nameWrap}>
                            <h4 className={s.name}>{name}</h4>
                            <span className={s.role}>{role || 'Разнорабочий'}</span>
                        </div>
                    </div>
                    <p className={s.review}>{review}</p>
                </li>
            ))}
        </Slider>
    )
}