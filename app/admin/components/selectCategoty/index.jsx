'use client'
import s from './style.module.css'
import { MessageStatus } from '../messageStatus'
import { Btn } from '../UI/btn'
import { CustomSelect } from '../customSelect'
import { useContext, useState } from 'react'
import { ListClothContext } from '@/app/providers'
import Skeleton from 'react-loading-skeleton'
import { CATEGORY, CATEGORY_UPDATE } from '@/app/constans'
import { deleteCategoryAction } from '../../actions/deleteAction'

export const SelectCategoty = ({
    list,
    setModalVisible,
    setTargetModal,
    setCategoryId,
    categoryId
}) => {

    const [categoryTitle, setCategoryTitle] = useState('')
    const [message, setMessage] = useState('')
    const { categoryesContext } = useContext(ListClothContext)

    const removeCategory = ({ title, id }) => {
        if (title === '' && id === 0) {
            setMessage({ text: `Выберете категорию`, status: 'error' })
            return
        }
        deleteCategoryAction({ id })
        setCategoryId(0)
        setCategoryTitle('')
        setMessage({ text: `Категория ${title} удалена`, status: 'success' })
        categoryesContext.getCategoryes()
    }

    const deletionRequest = ({ title, id }) => {
        setMessage({
            text: `Удалить ${title}?`,
            status: 'warning',
            confirmation: true,
            callback: () => removeCategory({ title, id })
        })
    }

    return (
        <>
            <div className={`${s.selectWrap}`}>

                {list.length === 0 ? <Skeleton /> :
                    <CustomSelect
                        name={CATEGORY}
                        getTitle={setCategoryTitle}
                        getId={setCategoryId}
                        selectList={list}
                    />
                }

                {categoryId !== 0 && (
                    <Btn
                        className={s.selectBtn}
                        onClick={() => deletionRequest({ id: categoryId, title: categoryTitle })}
                    >Удалить категорию</Btn>
                )}

                {categoryId !== 0 && (
                    <Btn
                        className={s.selectBtn}
                        onClick={() => {
                            setTargetModal(CATEGORY_UPDATE)
                            setModalVisible(true)
                        }}
                    >Изменить категорию</Btn>
                )}

                <Btn
                    className={s.selectBtn}
                    onClick={() => {
                        setTargetModal(CATEGORY)
                        setModalVisible(true)
                    }}
                >Добавить категорию</Btn>

            </div>
            <MessageStatus message={message} setMessage={setMessage} />
        </>
    )
}