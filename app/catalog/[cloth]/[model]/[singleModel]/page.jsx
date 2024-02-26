import { SingleModelComponent } from './singleModelComponent';
import s from './style.module.css'




//generateMetadata
export async function generateMetadata({ params: { cloth, model, singleModel } }) {
    const res = await fetch(`https://www.hlop-odejda.ru/api?q=${singleModel}`)
    const [catalog] = await res.json()
    return {
        title: catalog?.title
    }
}

//generateMetadata

export default function TypeCloth({ params: { cloth, model, singleModel } }) {
    return (
        <div className={`${s.cat}`}>
            <SingleModelComponent cloth={cloth} model={model} singleModel={singleModel} />
        </div>
    )
}