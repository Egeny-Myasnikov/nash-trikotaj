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
export const FormAddCategory = ({ addCategoryAction, setIsVisible, }) => {

    const [message, setMessage] = useState('')

    const { categoryesContext } = useContext(ListClothContext)

    const submitForm = async (e) => {
        e.preventDefault()
        const dataForm = new FormData(e.target)
        const { status, message } = await addCategoryAction(dataForm)

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
            <Title>Напиште название:</Title>
            <FieldText name={CATEGORY} placeholder={'Название категории...'} required={true} />

            <Title>Напиште описание:</Title>
            <FieldText name={'description'} placeholder={'Описание...'} />

            <Title>Добавьте фото:</Title>
            <FieldFile name={"imgCover"} required={true} />

            <Title>Напиште описание для SEO:</Title>
            <FieldText name={'descriptionSEO'} placeholder={'Описание для SEO...'} />

            <Btn type='submit' >Добавить</Btn>
            <MessageStatus message={message} setMessage={setMessage} />
        </form>
    )
}