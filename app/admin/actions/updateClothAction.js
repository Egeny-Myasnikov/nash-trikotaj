'use server'
import { updateCloth } from "@/app/CRUD/update"
import { strToPath } from "@/app/helper"
import { uploadAndRenameImg } from "@/app/utils/uploadAndRenameImg"


export async function updateClothAction(formData) {
    const data = Object.fromEntries(formData)
    const categoryTitle = data.categoryTitle
    const typeTitle = data.typeTitle

    const pathImg = async () => {
        if (!data.imgCover) return
        return await uploadAndRenameImg({
            path: `public/imgs/catalog/${strToPath(categoryTitle)}/${strToPath(typeTitle)}/${strToPath(data.titleCloth)}/`,
            dataImg: data.imgCover,
            newTitle: data.titleCloth
        })
    }
    const id = data.id
    const obj = {
        title: data.titleCloth,
        imgCover: await pathImg(),
        description: data.description,
        descriptionSEO: data.descriptionSEO,
    }

    await updateCloth({ object: obj, id: +id })

    return { message: `Одежда ${data.titleCloth} изменена!`, status: 'success', data: obj }

}