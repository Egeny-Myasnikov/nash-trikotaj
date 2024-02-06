import { ClothComponent } from './clothComponent';
import s from './style.module.css'
export default function Cloth ({params:{cloth}}) {
    return (
        <div className={`${s.cat}`}>
            <ClothComponent cat={cloth} />
        </div>
    )
}