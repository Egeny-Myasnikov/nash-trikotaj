'use client'
import { useContext, useState } from 'react'
import Image from 'next/image'
import s from './style.module.css'
import { MessageStatus } from '../../../messageStatus'
import { Title } from '../../../UI/title'
import { FieldText } from '../../../UI/fields/fieldText'
import { FieldFile } from '../../../UI/fields/fieldFile'
import { Btn } from '../../../UI/btn'
import { ListClothContext } from '@/app/providers'
import { updateClothAction } from '@/app/admin/actions/updateClothAction'
export const FormUpdateCloth = ({
    setIsVisible,
    clothId,
    categoryTitle,
    typeTitle }) => {
    const [message, setMessage] = useState('')

    const { clothsContext } = useContext(ListClothContext)
    // const [currentCloth] = clothsContext.clothList.filter(({ id }) => clothId === id)
    const [currentCloth, setСurrentCloth] = useState(clothsContext.clothList.filter(({ id }) => clothId === id)[0])
    const submitForm = async (e) => {
        e.preventDefault()
        const dataForm = new FormData(e.target)
        const { status, message } = await updateClothAction(dataForm)

        if (status === 'error') return setMessage({ text: message, status })

        setMessage({ text: message, status })
        e.target.reset()
        clothsContext.getCloths()
        setСurrentCloth(clothsContext.clothList.filter(({ id }) => clothId === id)[0])
        setTimeout(() => {
            setIsVisible(false)
        }, 2500)
    }
    return (
        <>
            <form className={`${s.form}`} onSubmit={submitForm}>
                <p>Название: <b> {currentCloth.title}</b></p>
                <Image src={currentCloth.imgCover.slice(6)} width={200} height={200} alt={currentCloth.title} />
                <Title>Измените название:</Title>
                <FieldText name={'titleCloth'} placeholder={'Новое название одежды...'} defaultValue={currentCloth.title} />

                <Title>Напиште описание:</Title>
                <FieldText name={'description'} placeholder={'Описание...'} defaultValue={currentCloth.description} />

                <input type="hidden" name="id" value={clothId} />
                <input type="hidden" name="categoryTitle" value={categoryTitle} />
                <input type="hidden" name="typeTitle" value={typeTitle} />
                <Title>Выберете новое фото:</Title>
                <FieldFile name={"imgCover"} />

                <Title>Напиште описание SEO:</Title>
                <FieldText name={'descriptionSEO'} placeholder={'Описание SEO...'} defaultValue={currentCloth.descriptionSEO} />

                <Btn type='submit' >Изменить</Btn>
                <MessageStatus message={message} setMessage={setMessage} />

            </form>
        </>
    )
}