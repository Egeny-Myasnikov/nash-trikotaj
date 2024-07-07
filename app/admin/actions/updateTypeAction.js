'use server'
import { updateType } from "@/app/CRUD/update"
import { strToPath } from "@/app/helper"
import { uploadAndRenameImg } from "@/app/utils/uploadAndRenameImg"


export async function updateTypeAction(formData) {
    const data = Object.fromEntries(formData)

    const pathImg = async () => {
        if (!data.imgCover) return
        return await uploadAndRenameImg({
            path: `public/imgs/catalog/${strToPath(data.type)}/`,
            dataImg: data.imgCover,
            newTitle: data.type
        })
    }
    const id = data.id
    const obj = {
        title: data.type,
        imgCover: await pathImg(),
        description: data.description,
        descriptionSEO: data.descriptionSEO,
    }

    await updateType({ object: obj, id: +id })

    return { message: `Тип ${data.type} изменён!`, status: 'success', data: obj }

}