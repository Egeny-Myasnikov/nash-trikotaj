import { rm } from "fs"

export const removeDirAndFile = (path) => {
    const dirArr = path.split('/')
    dirArr.pop()
    const currentDir = dirArr.join('/')
    rm(currentDir, { recursive: true }, err => {
        if (err) throw err
    })
}