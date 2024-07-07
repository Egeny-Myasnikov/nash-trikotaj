'use server'
import { createType } from "@/app/CRUD/create"
import { strToPath } from "@/app/helper"
import { uploadAndRenameImg } from "@/app/utils/uploadAndRenameImg"


export async function addTypeAction(formData) {
    const data = Object.fromEntries(formData)
    const categoryTitle = data.categoryTitle
    const pathImg = await uploadAndRenameImg({
        path: `public/imgs/catalog/${strToPath(categoryTitle)}/${strToPath(data.type)}/`,
        dataImg: data.imgCover,
        newTitle: data.type
    })

    const obj = {
        title: data.type,
        imgCover: pathImg,
        description: data.description,
        descriptionSEO: data.descriptionSEO,
        catalogId: +data.catalogId
    }
    if (data.type === '') return { message: 'Напишите название!', status: 'error' }
    if (data.catalogId === '0') return { message: 'Не выбрана категория!', status: 'error' }
    if (pathImg === undefined) return { message: 'Не выбрано фото!', status: 'error' }
    await createType({ object: obj })
    return { message: `Тип ${data.type} добавлен!`, status: 'success' }
}