'use client'
import { ModelComponent } from '../../modelComponent'
import s from './style.module.css'

export function ModelHero({ cloth, model, id }) {

    return (
        <section className={`${s.modelHero}`}>
            <ModelComponent cloth={cloth} model={model} id={id} />
        </section>
    )
}