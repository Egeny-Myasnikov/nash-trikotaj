'use client'
import { ClothComponent } from '../../clothComponent'
import s from './style.module.css'

export function ClothHero({ cloth, id }) {
    return (
        <section className={`${s.clothHero}`}>
            <ClothComponent cat={cloth} id={id} />
        </section>
    )
}