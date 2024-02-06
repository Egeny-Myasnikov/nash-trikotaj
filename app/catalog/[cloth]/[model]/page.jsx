import { ModelComponent } from './modelComponent'
import s from './style.module.css'
export default function TypeCloth({params:{cloth, model}}) {
    return (
        <div className={`${s.cat}`}><ModelComponent cloth={cloth} model={model} /></div>
    )
}