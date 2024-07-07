'use client'
import { useContext, useState } from 'react'
import s from './style.module.css'
import { MessageStatus } from '../../../messageStatus'
import { Title } from '../../../UI/title'
import { FieldText } from '../../../UI/fields/fieldText'
import { FieldFile } from '../../../UI/fields/fieldFile'
import { Btn } from '../../../UI/btn'
import { ListClothContext } from '@/app/providers'
import { TYPE } from '@/app/constans'
export const FormAddType = ({
    addTypeAction,
    setIsVisible,
    catalogId }) => {
    const [message, setMessage] = useState('')

    const { categoryesContext, typesContext } = useContext(ListClothContext)

    const categoryTitle = categoryesContext.categoryList.filter(cat => cat.id === (+catalogId))[0].title


    const submitForm = async (e) => {
        e.preventDefault()
        const dataForm = new FormData(e.target)
        const { status, message } = await addTypeAction(dataForm)

        if (status === 'error') return setMessage({ text: message, status })

        setMessage({ text: message, status })
        e.target.reset()
        typesContext.getTypes()
        setTimeout(() => {
            setIsVisible(false)
        }, 2500)
    }
    return (
        <>
            <form className={`${s.formAddType}`} onSubmit={submitForm}>
                <input type="hidden" name='catalogId' value={catalogId} />
                <input type="hidden" name='categoryTitle' value={categoryTitle} />

                <Title>Напиште название:</Title>
                <FieldText name={TYPE} placeholder={'Название типа...'} required={true} />

                <Title>Напиште описание:</Title>
                <FieldText name={'description'} placeholder={'Описание...'} />

                <Title>Добавьте фото:</Title>
                <FieldFile name={"imgCover"} required={true} />

                <Title>Напиште описание SEO:</Title>
                <FieldText name={'descriptionSEO'} placeholder={'Описание SEO...'} />

                <Btn type='submit' >Добавить</Btn>

            </form>
            <MessageStatus message={message} setMessage={setMessage} />
        </>
    )
}