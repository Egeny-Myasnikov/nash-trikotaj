import { CATEGORY, CATEGORY_UPDATE, CLOTH_UPDATE, TYPE, TYPE_UPDATE } from '@/app/constans'
import s from './style.module.css'
import { ModalWindow } from '@/app/components/modalWindow'
import { FormAddCategory } from '../forms/addForms/formAddCategory'
import { FormAddType } from '../forms/addForms/formAddType'
import { FormUpdateCategory } from '../forms/updateForms/formUpdateCategory'
import { FormUpdateType } from '../forms/updateForms/formUpdateType'
import { FormUpdateCloth } from '../forms/updateForms/formUpdateCloth'

export const ModalActionCRUD = ({ actions,
    setModalVisible,
    modalVisible,
    categoryId,
    typeId,
    targetModal,
    clothId,
    categoryTitle,
    typeTitle }) => {

    const titleModal = (target) => {
        switch (target) {
            case CATEGORY:
                return 'Добавить категорию'
            case CATEGORY_UPDATE:
                return 'Изменить категорию'
            case TYPE:
                return 'Добавить тип'
            case TYPE_UPDATE:
                return 'Изменить тип'
            case CLOTH_UPDATE:
                return 'Изменить одежду'
            default:
                return ''
        }
    }
    return <>
        {
            !modalVisible ? null : (
                <ModalWindow
                    title={titleModal(targetModal)}
                    isVisible={modalVisible}
                    setIsVisible={setModalVisible}
                >
                    {
                        targetModal === CATEGORY ?
                            (<FormAddCategory
                                setIsVisible={setModalVisible}
                                addCategoryAction={actions.addCategoryAction}
                            />)
                            : targetModal === CATEGORY_UPDATE ?
                                (<FormUpdateCategory
                                    addTypeAction={actions.addTypeAction}
                                    setIsVisible={setModalVisible}
                                    catalogId={categoryId}
                                />)
                                : targetModal === TYPE ?
                                    (<FormAddType
                                        addTypeAction={actions.addTypeAction}
                                        setIsVisible={setModalVisible}
                                        catalogId={categoryId}
                                    />)
                                    : targetModal === TYPE_UPDATE ?
                                        (<FormUpdateType
                                            addTypeAction={actions.addTypeAction}
                                            setIsVisible={setModalVisible}
                                            catalogId={categoryId}
                                            typeId={typeId}
                                        />)
                                        : targetModal === CLOTH_UPDATE ?
                                            (<FormUpdateCloth
                                                setIsVisible={setModalVisible}
                                                clothId={clothId}
                                                categoryTitle={categoryTitle}
                                                typeTitle={typeTitle}
                                            />)
                                            : null
                    }
                </ModalWindow>
            )
        }
    </>
}