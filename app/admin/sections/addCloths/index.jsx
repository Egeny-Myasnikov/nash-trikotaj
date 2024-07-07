import s from './style.module.css'
import { TitleSection } from '@/app/components/UI/titleSection'
import { FormAddCloths } from '../../components/forms/addForms/formAddCloths'
export const AddClothsSection = ({ actions }) => {

    return (
        <section className={`${s.addClothSection}`}>
            <TitleSection >Добавить одежду</TitleSection>
            <FormAddCloths actions={actions} />
        </section>
    )
}