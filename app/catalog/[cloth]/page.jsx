import { ClothComponent } from './clothComponent'
import s from './style.module.css'

export async function generateMetadata({ params: { cloth } }) {
    try {
        const res = await fetch(`https://www.hlop-odejda.ru/api?q=${cloth}`)
        const [catalog] = await res.json()
        return {
            title: catalog?.title
        }
    } catch (error) {
        console.log(error.message);
    }
}

export default function Cloth({ params: { cloth } }) {

    return (
        <div className={`${s.cat}`}>
            <ClothComponent cat={cloth} />
        </div>
    )
}