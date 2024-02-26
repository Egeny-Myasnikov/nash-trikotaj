import { ModelComponent } from './modelComponent'
import s from './style.module.css'

//generateMetadata
export async function generateMetadata({ params: { cloth, model } }) {
    const res = await fetch(`http://localhost:3000/api?q=${model}`)
    const [catalog] = await res.json()
    return {
        title: catalog?.title
    }
}

//generateMetadata


export default function TypeCloth({ params: { cloth, model } }) {
    return (
        <div className={`${s.cat}`}><ModelComponent cloth={cloth} model={model} /></div>
    )
}