'use server'
import { createCategory } from "@/app/CRUD/create"
import { strToPath } from "@/app/helper"
import { auth } from "@/app/utils/auth/auth"
import { uploadAndRenameImg } from "@/app/utils/uploadAndRenameImg"


export async function addCategoryAction(formData) {
    const admin = await auth()
    const data = Object.fromEntries(formData)
    const pathImg = await uploadAndRenameImg({
        path: `public/imgs/catalog/${strToPath(data.category)}/`,
        dataImg: data.imgCover,
        newTitle: data.category
    })

    const obj = {
        title: data.category,
        imgCover: pathImg,
        description: data.description,
        descriptionSEO: data.descriptionSEO,
        userId: admin.id
    }

    if (data.category === '') return { message: 'Напишите название!', status: 'error' }
    if (admin.id === '') return { message: 'Авторизуйтесь как админ!', status: 'error' }
    if (pathImg === undefined) return { message: 'Не выбрано фото!', status: 'error' }

    await createCategory({ object: obj })

    return { message: `Категория ${data.category} добавлена!`, status: 'success', data: obj }

}