import { writeFile } from "fs/promises"
import { extname, join, resolve } from "path"
import { existsSync, mkdir, renameSync } from "fs"
import { strToPath } from "@/app/helper"

export const uploadAndRenameImg = async ({ path = 'public', dataImg, newTitle }) => {
    if (dataImg?.type !== 'image/jpeg') return
    if (!newTitle) return
    const ext = extname(dataImg.name)
    const title = strToPath(newTitle)
    if (!existsSync(path)) {
        mkdir(path, err => {
            err ? console.log(err) : console.log('Папка создана')
        })
    }
    const pathFile = join(resolve(path, dataImg.name))
    const bytes = await dataImg.arrayBuffer()
    const buffer = Buffer.from(bytes)
    await writeFile(pathFile, buffer)

    renameSync(pathFile, `${path}${title}${ext}`, (err) => {
        if (err) throw err.message
        console.log('Файл переименован')
    })

    return `${path}${title}${ext}`

}