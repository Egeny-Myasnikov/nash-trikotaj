'use client'
import { useContext, useState } from 'react'
import s from './style.module.css'
import { MessageStatus } from '../../../messageStatus'
import { Title } from '../../../UI/title'
import { FieldText } from '../../../UI/fields/fieldText'
import { FieldFile } from '../../../UI/fields/fieldFile'
import { Btn } from '../../../UI/btn'
import { ListClothContext } from '@/app/providers'
import { CATEGORY } from '@/app/constans'
import Image from 'next/image'
import { updateCategoryAction } from '@/app/admin/actions/updateCategoryAction'
export const FormUpdateCategory = ({ setIsVisible, catalogId }) => {

    const [message, setMessage] = useState('')

    const { categoryesContext } = useContext(ListClothContext)

    const [currentCategory] = categoryesContext.categoryList.filter(({ id }) => catalogId === id)
    const submitForm = async (e) => {
        e.preventDefault()
        const dataForm = new FormData(e.target)
        const { status, message } = await updateCategoryAction(dataForm)

        if (status === 'error') return setMessage({ text: message, status })

        setMessage({ text: message, status })
        e.target.reset()
        categoryesContext.getCategoryes()
        setTimeout(() => {
            setIsVisible(false)
        }, 2500)
    }

    return (
        <form className={`${s.formAddCategory}`} onSubmit={submitForm}>
            <p>Название: <b> {currentCategory.title}</b></p>
            <Image src={currentCategory.imgCover.slice(6)} width={200} height={200} alt={currentCategory.title} />
            <Title>Измените название:</Title>
            <FieldText name={CATEGORY} placeholder={'Новое название категории...'} defaultValue={currentCategory.title} />

            <Title>Напиште описание:</Title>
            <FieldText name={'description'} placeholder={'Описание...'} defaultValue={currentCategory.description} />

            <input type="hidden" name="id" value={catalogId} />
            <Title>Выберете новое фото:</Title>
            <FieldFile name={"imgCover"} />

            <Title>Напиште описание SEO:</Title>
            <FieldText name={'descriptionSEO'} placeholder={'Описание SEO...'} defaultValue={currentCategory.descriptionSEO} />

            <Btn type='submit' >Изменить</Btn>
            <MessageStatus message={message} setMessage={setMessage} />
        </form>
    )
}