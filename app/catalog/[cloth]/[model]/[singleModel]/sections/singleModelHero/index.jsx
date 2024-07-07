'use client'
import { SingleModelComponent } from '../../singleModelComponent'
import s from './style.module.css'

export function SingleModelHero({ cloth, model, singleModel, id }) {
    return (
        <section className={`${s.singleModelHero}`}>
            <SingleModelComponent cloth={cloth} model={model} singleModel={singleModel} id={id} />
        </section>
    )
}