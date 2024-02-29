import { getMetadata } from '@/app/helper'
import { ModelComponent } from './modelComponent'
import s from './style.module.css'

//generateMetadata
export async function generateMetadata({ params: { model } }) {
    return await getMetadata(model)
}

//generateMetadata


export default function TypeCloth({ params: { cloth, model } }) {
    return (
        <div className={`${s.cat}`}><ModelComponent cloth={cloth} model={model} /></div>
    )
}