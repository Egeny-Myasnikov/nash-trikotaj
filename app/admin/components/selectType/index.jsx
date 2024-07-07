'use client'
import s from './style.module.css'
import { MessageStatus } from '../messageStatus'
import { Btn } from '../UI/btn'
import { CustomSelect } from '../customSelect'
import { useContext, useState } from 'react'
import { deleteType } from '@/app/CRUD/delete'
import { ListClothContext } from '@/app/providers'
import { TYPE, TYPE_UPDATE } from '@/app/constans'

export const SelectType = ({
    list,
    setModalVisible,
    setTargetModal,
    setTypeId,
    typeId,
    categoryId
}) => {
    const [typeTitle, setTypeTitle] = useState('')
    const [message, setMessage] = useState('')

    const { typesContext } = useContext(ListClothContext)


    const delType = ({ title, id }) => {
        if (title === '' && id === 0) {
            setMessage({ text: `Выберете тип`, status: 'error' })
            return
        }
        deleteType({ id })
        setTypeId(0)
        setTypeTitle('')
        setMessage({ text: `Тип ${title} удален`, status: 'success' })
        typesContext.getTypes()

    }

    const openModalToAction = (action) => {
        if (categoryId === 0) {
            setMessage({ text: `Выберете категорию`, status: 'error' })
            return
        }
        setTargetModal(action)
        setModalVisible(true)
    }



    return (
        <>
            <div className={`${s.selectWrap}`}>
                {
                    list.length === 0 ?
                        <p>Нет типов одежды! Добавьте новый тип одежды.</p> :
                        <CustomSelect
                            name={TYPE}
                            getTitle={setTypeTitle}
                            getId={setTypeId}
                            selectList={list}
                        />
                }
                {typeId !== 0 && (
                    <Btn
                        className={s.selectBtn}
                        onClick={() => delType({ id: typeId, title: typeTitle })}
                    >Удалить тип</Btn>
                )}
                {typeId !== 0 && (
                    <Btn
                        className={s.selectBtn}
                        onClick={() => openModalToAction(TYPE_UPDATE)}
                    >Изменить тип</Btn>
                )}
                <Btn
                    className={s.selectBtn}
                    onClick={() => openModalToAction(TYPE)}
                >Добавить тип</Btn>
            </div>

            <MessageStatus message={message} setMessage={setMessage} />
        </>
    )
}