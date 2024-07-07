'use client'
import s from './style.module.css'
import { useContext, useState } from 'react'
import { SVGSprite } from '@/app/components/SVGSprite'
import { deleteCloth } from '@/app/CRUD/delete'
import { MessageStatus } from '../messageStatus'
import { ListClothContext } from '@/app/providers'
import Skeleton from 'react-loading-skeleton'
import { CLOTH_UPDATE } from '@/app/constans'
import { ModalActionCRUD } from '../modalActionCRUD'
import Image from 'next/image'
export const ClothsList = () => {
    const { clothsContext, typesContext, categoryesContext } = useContext(ListClothContext)
    const [message, setMessage] = useState('')

    const [clothId, setClothId] = useState('')
    const [typeTitle, setTypeTitle] = useState('')
    const [categoryTitle, setCategoryTitle] = useState('')

    const [modalVisible, setModalVisible] = useState(false)

    const deleteRequest = ({ id, title }) => {
        setMessage({
            text: `Удалить ${title}?`,
            status: 'warning',
            confirmation: true,
            callback: () => removeCloth({ id, title })
        })
    }
    const editRequest = ({ id, title }) => {
        setMessage({
            text: `Изменить ${title}?`,
            status: 'warning',
            confirmation: true,
            callback: () => editCloth({ id, title })
        })
    }

    const removeCloth = async ({ id, title }) => {
        await deleteCloth({ id })
        setMessage({ text: `${title} Удалено!`, status: 'success' })
        clothsContext.getCloths()
    }
    const editCloth = async ({ id, title }) => {
        setModalVisible(true)
        const cloth = clothsContext.clothList.filter(cloth => cloth.id === id)[0]
        const currentType = typesContext.typeList.filter((type) => type?.id === cloth.typeId)[0]
        const currentCategory = categoryesContext.categoryList.filter((cat) => cat?.id === currentType?.catalogId)[0]
        setClothId(id)
        setTypeTitle(currentType.title)
        setCategoryTitle(currentCategory.title)
    }

    const filterType = typeId => typesContext.typeList.filter(type => type?.id === typeId)[0]

    const filterCategory = categoryId => categoryesContext.categoryList.filter(category => category?.id === categoryId)[0]

    return (
        <ul className={`${s.clothList}`}>
            <div style={{ display: 'flex', gap: '10px' }}>
                <div>
                    <h4>Категория одежды</h4><br />
                    {
                        categoryesContext.categoryList &&
                            categoryesContext.categoryList.length === 0 ?
                            <Skeleton /> :
                            categoryesContext.categoryList.map(el => <div key={el.id}>{el.title} , {el.id}</div>)
                    }

                </div>
                <div>
                    <h4>Тип одежды</h4><br />

                    {
                        typesContext.typeList &&
                            typesContext.typeList.length === 0 ?
                            <Skeleton /> :
                            typesContext.typeList.map(el => {
                                return (
                                    <div key={el.id}>{el.title} , {el.id}</div>
                                )
                            })
                    }

                </div>
                <div>
                    <h4> Одежда</h4><br />
                    {
                        clothsContext.clothList &&
                            clothsContext.clothList.length === 0 ?
                            <Skeleton /> :
                            clothsContext.clothList.map(el => <div key={el.id}>{el.title} , {el.id}</div>)
                    }

                </div>


            </div>

            <li className={`${s.clothItem} ${s.clothItemHeader} `}>
                <span className={`${s.clothEntity} ${s.clothEntityHeader}`}>N</span>
                <span className={`${s.clothEntity} ${s.clothEntityHeader}`}>Категория</span>
                <span className={`${s.clothEntity} ${s.clothEntityHeader}`}>Тип</span>
                <span className={`${s.clothEntity} ${s.clothEntityHeader}`}>Одежда</span>
                <span className={`${s.clothEntity} ${s.clothEntityHeader}`}>Фото</span>
                <span className={`${s.clothEntity} ${s.clothEntityHeader}`}>Действия</span>
            </li>

            {
                clothsContext.clothList?.map((cloth, idx) => (
                    <li className={`${s.clothItem}`} key={cloth.id}>

                        <span className={`${s.clothEntity}`}>{idx + 1}</span>

                        <span className={`${s.clothEntity}`}>{filterCategory(filterType(cloth.typeId)?.catalogId)?.title}</span>

                        <span className={`${s.clothEntity}`}>{filterType(cloth.typeId)?.title}</span>

                        <span className={`${s.clothEntity}`}>{cloth.title}</span>
                        <span className={`${s.clothEntity}`}>
                            <Image
                                src={cloth.imgCover.slice(6)}
                                alt={cloth.title}
                                width={50}
                                height={50}
                            />
                        </span>
                        <span className={`${s.clothEntity} ${s.clothEntityAction}`}>

                            <button type='button' onClick={() => deleteRequest({ id: cloth.id, title: cloth.title })} >
                                <SVGSprite className={`${s.trashIcon}`} id={'trash'} />
                            </button>
                            <button type='button' onClick={() => editRequest({ id: cloth.id, title: cloth.title })} >
                                <SVGSprite className={`${s.editIcon}`} id={'edit'} />
                            </button>

                        </span>
                    </li>
                ))
            }
            <MessageStatus
                message={message}
                setMessage={setMessage}
            />

            <ModalActionCRUD
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                targetModal={CLOTH_UPDATE}
                clothId={clothId}
                typeTitle={typeTitle}
                categoryTitle={categoryTitle}
            />
        </ul>

    )
}