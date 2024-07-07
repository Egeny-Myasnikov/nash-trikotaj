'use server'

import prisma from "../utils/prisma"

export const createCategory = async ({ object }) => {
    return await prisma.catalog.create({ data: object }).catch(e => { throw e }).finally(async () => await prisma.$disconnect())
}
export const createType = async ({ object }) => {
    return await prisma.type.create({ data: object }).catch(e => { throw e }).finally(async () => await prisma.$disconnect())
}
export const createCloth = async ({ object }) => {
    return await prisma.cloth.create({ data: object }).catch(e => { throw e }).finally(async () => await prisma.$disconnect())

}
