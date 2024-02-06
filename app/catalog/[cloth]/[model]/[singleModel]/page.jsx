
import { SingleModelComponent } from './singleModelComponent';
import s from './style.module.css'
export default function TypeCloth({ params: { cloth, model, singleModel } }) {
    return (
        <div className={`${s.cat}`}>
            <SingleModelComponent cloth={cloth} model={model} singleModel={singleModel} />
        </div>
    )
}