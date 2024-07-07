'use server'
import prisma from "../utils/prisma"
import { removeDirAndFile } from "../utils/removeDirAndFile"
export const deleteCategory = async ({ id }) => {
    const deleteCat = await prisma.catalog.delete({ where: { id: id } }).catch(e => { throw e }).finally(async () => await prisma.$disconnect())
    removeDirAndFile(deleteCat.imgCover)
    return deleteCat
}

export const deleteType = async ({ id }) => {
    const deleteType = await prisma.type.delete({ where: { id: id } }).catch(e => { throw e }).finally(async () => await prisma.$disconnect())
    removeDirAndFile(deleteType.imgCover)
    return deleteType
}

export const deleteCloth = async ({ id }) => {
    const deleteCloth = await prisma.cloth.delete({ where: { id: id } }).catch(e => { throw e }).finally(async () => await prisma.$disconnect())
    removeDirAndFile(deleteCloth.imgCover)
    return deleteCloth
}
