import { getMetadata } from '@/app/helper';
import { ClothComponent } from './clothComponent'
import s from './style.module.css'

export async function generateMetadata({ params: { cloth } }) {
    return await getMetadata(cloth)
}

export default function Cloth({ params: { cloth } }) {

    return (
        <div className={`${s.cat}`}>
            <ClothComponent cat={cloth} />
        </div>
    )
}