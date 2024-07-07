'use server'
import { updateCategory } from "@/app/CRUD/update"
import { strToPath } from "@/app/helper"
import { auth } from "@/app/utils/auth/auth"
import { uploadAndRenameImg } from "@/app/utils/uploadAndRenameImg"


export async function updateCategoryAction(formData) {
    const admin = await auth()
    const data = Object.fromEntries(formData)

    const pathImg = async () => {
        if (!data.imgCover) return
        return await uploadAndRenameImg({
            path: `public/imgs/catalog/${strToPath(data.category)}/`,
            dataImg: data.imgCover,
            newTitle: data.category
        })
    }
    const id = data.id
    const obj = {
        title: data.category,
        imgCover: await pathImg(),
        description: data.description,
        descriptionSEO: data.descriptionSEO,
        userId: admin.id
    }
    if (admin.id === '') return { message: 'Авторизуйтесь как админ!', status: 'error' }

    await updateCategory({ object: obj, id: +id })

    return { message: `Категория ${data.category} изменена!`, status: 'success', data: obj }

}