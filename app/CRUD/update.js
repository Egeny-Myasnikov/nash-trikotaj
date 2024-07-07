'use server'

import prisma from "../utils/prisma"

export const updateCategory = async ({ object, id }) => {
    return await prisma.catalog.update({ where: { id }, data: object }).catch(e => { throw e }).finally(async () => await prisma.$disconnect())
}
export const updateType = async ({ object, id }) => {
    return await prisma.type.update({ where: { id }, data: object }).catch(e => { throw e }).finally(async () => await prisma.$disconnect())
}
export const updateCloth = async ({ object, id }) => {
    return await prisma.cloth.update({ where: { id }, data: object }).catch(e => { throw e }).finally(async () => await prisma.$disconnect())
}