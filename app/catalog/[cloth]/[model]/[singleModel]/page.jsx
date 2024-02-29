import { getMetadata } from '@/app/helper';
import { SingleModelComponent } from './singleModelComponent';
import s from './style.module.css'




//generateMetadata
export async function generateMetadata({ params: { singleModel } }) {
    return await getMetadata(singleModel)
}

//generateMetadata

export default function TypeCloth({ params: { cloth, model, singleModel } }) {
    return (
        <div className={`${s.cat}`}>
            <SingleModelComponent cloth={cloth} model={model} singleModel={singleModel} />
        </div>
    )
}