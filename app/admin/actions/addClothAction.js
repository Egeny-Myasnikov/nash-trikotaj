'use server'
import { createCloth } from "@/app/CRUD/create"
import { strToPath } from "@/app/helper"
import { uploadAndRenameImg } from "@/app/utils/uploadAndRenameImg"

export async function addClothAction(formData) {
    const data = Object.fromEntries(formData)
    const categoryTitle = data.categoryTitle
    const typeTitle = data.typeTitle

    const pathImg = await uploadAndRenameImg({
        path: `public/imgs/catalog/${strToPath(categoryTitle)}/${strToPath(typeTitle)}/${strToPath(data.titleCloth)}/`,
        dataImg: data.imgCover,
        newTitle: data.titleCloth
    })

    const obj = {
        title: data.titleCloth,
        imgCover: pathImg,
        description: data.description,
        descriptionSEO: data.descriptionSEO,
        color: data.color,
        size: data.size,
        typeId: +data.typeId
    }
    if (data.categoryId === '0') return { message: 'Не выбрана категория!', status: 'error' }
    if (data.typeId === '0') return { message: 'Не выбран тип!', status: 'error' }
    if (data.titleCloth === '') return { message: 'Нет названия!', status: 'error' }
    if (pathImg === undefined) return { message: 'Не выбрано фото!', status: 'error' }
    await createCloth({ object: obj })
    return { message: `${data.titleCloth} добавлено!`, status: 'success' }
}