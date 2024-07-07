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
import { TYPE } from '@/app/constans'
import { updateTypeAction } from '@/app/admin/actions/updateTypeAction'
export const FormUpdateType = ({
    setIsVisible,
    typeId }) => {
    const [message, setMessage] = useState('')

    const { typesContext } = useContext(ListClothContext)
    const [currentType] = typesContext.typeList.filter(({ id }) => typeId === id)
    console.log('currentType--> ', currentType)
    const submitForm = async (e) => {
        e.preventDefault()
        const dataForm = new FormData(e.target)
        const { status, message } = await updateTypeAction(dataForm)

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
                <p>Название: <b> {currentType.title}</b></p>
                <Image src={currentType.imgCover.slice(6)} width={200} height={200} alt={currentType.title} />
                <Title>Измените название:</Title>
                <FieldText name={TYPE} placeholder={'Новое название типа...'} defaultValue={currentType.title} />

                <Title>Напиште описание:</Title>
                <FieldText name={'description'} placeholder={'Описание...'} defaultValue={currentType.description} />

                <input type="hidden" name="id" value={typeId} />
                <Title>Выберете новое фото:</Title>
                <FieldFile name={"imgCover"} />

                <Title>Напиште описание SEO:</Title>
                <FieldText name={'descriptionSEO'} placeholder={'Описание SEO...'} defaultValue={currentType.descriptionSEO} />

                <Btn type='submit' >Изменить</Btn>
                <MessageStatus message={message} setMessage={setMessage} />

            </form>
        </>
    )
}