'use client'
import { useContext, useLayoutEffect, useState } from 'react'
import s from './style.module.css'
import { FieldText } from '../../../UI/fields/fieldText'
import { FieldFile } from '../../../UI/fields/fieldFile'
import { FieldColor } from '../../../UI/fields/fieldColor'
import { FieldNumber } from '../../../UI/fields/fieldNumber'
import { SelectCategoty } from '../../../selectCategoty'
import { SelectType } from '../../../selectType'
import { Title } from '../../../UI/title'
import { Btn } from '../../../UI/btn'
import { MessageStatus } from '../../../messageStatus'
import { ListClothContext } from '@/app/providers'
import { ModalActionCRUD } from '../../../modalActionCRUD'
import { CATEGORY } from '@/app/constans'

// Форма добавления новой одежды

export const FormAddCloths = ({ actions }) => {
    const [categoryId, setCategoryId] = useState(0)
    const [typeId, setTypeId] = useState(0)

    const [modalVisible, setModalVisible] = useState(false)
    const [targetModal, setTargetModal] = useState(CATEGORY)

    const { clothsContext, typesContext, categoryesContext } = useContext(ListClothContext)

    const [message, setMessage] = useState('')

    const submitForm = async (e) => {
        e.preventDefault()
        const dataForm = new FormData(e.target)
        const { status, message } = await actions.addClothAction(dataForm)
        if (status === 'error') return setMessage({ text: message, status })
        setMessage({ text: message, status })
        setCategoryId(0)
        setTypeId(0)
        clothsContext.getCloths()
        e.target.reset()
    }
    const typeListFromCategory = (id) => typesContext.typeList.filter(({ catalogId }) => id === catalogId)

    const categoryTitle = categoryesContext.categoryList.filter(cat => cat.id === categoryId)[0]?.title
    const typeTitle = typesContext.typeList.filter(type => type.id === typeId)[0]?.title

    useLayoutEffect(() => {
        setTypeId(0)
    }, [
        categoryId
    ])


    return (
        <>
            <form className={`${s.form}`} onSubmit={submitForm} name='cloth'>

                <Title>Выберете категорию одежды:</Title>

                <SelectCategoty
                    list={categoryesContext.categoryList}
                    setModalVisible={setModalVisible}
                    setTargetModal={setTargetModal}
                    setCategoryId={setCategoryId}
                    categoryId={categoryId}
                />

                {categoryId === 0 ? null : <>
                    <Title>Выберете тип одежды:</Title>
                    <SelectType
                        list={typeListFromCategory(categoryId)}
                        setModalVisible={setModalVisible}
                        setTargetModal={setTargetModal}
                        setTypeId={setTypeId}
                        typeId={typeId}
                        categoryId={categoryId}
                    />
                </>}

                <Title>Напиште название:</Title>
                <FieldText name={'titleCloth'} placeholder={'Название одежды...'} required={true} />

                <Title>Напиште описание:</Title>
                <FieldText name={'description'} placeholder={'Описание...'} />

                <Title>Добавьте фото:</Title>
                <FieldFile name={"imgCover"} required={true} />

                <input type="hidden" name="typeId" value={typeId} />
                <input type="hidden" name="categoryId" value={categoryId} />

                <input type="hidden" name="categoryTitle" value={categoryTitle} />
                <input type="hidden" name="typeTitle" value={typeTitle} />

                <Title>Выберете цвет:</Title>
                <FieldColor name={'color'} />

                <Title>Напиште размер:</Title>
                <FieldNumber name={"size"} placeholder='размер...' />

                <Title>Напиште описание SEO:</Title>
                <FieldText name={'descriptionSEO'} placeholder={'Описание SEO...'} />

                <Btn type='submit' >Добавить</Btn>
                <Btn type='reset' >Отчистить</Btn>

                <MessageStatus message={message} setMessage={setMessage} />
            </form>

            <ModalActionCRUD
                actions={actions}
                categoryId={categoryId}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                targetModal={targetModal}
                typeId={typeId}
            />

        </>
    )
}
