import { TitleSection } from '@/app/components/UI/titleSection'
import s from './style.module.css'
import { ClothsList } from '../../components/clothsList'
export const ClothsSection = () => {
    return (
        <section className={`${s.clothsSection}`}>
            <TitleSection className={`${s.title}`}>Одежда</TitleSection>
            <ClothsList />

        </section>
    )
}