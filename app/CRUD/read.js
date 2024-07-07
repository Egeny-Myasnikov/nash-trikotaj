'use server'
import { getAdminId } from "../utils/auth/auth"
import prisma from "../utils/prisma"

// ==== category
export const readCategory = async ({ id }) => {
    const categoryes = await prisma.catalog.findMany({ where: { id: id } }).catch(e => { throw e }).finally(async () => await prisma.$disconnect())
    return categoryes
}

export const readAllCategoryes = async () => {
    const id = await getAdminId()
    const categoryes = await prisma.catalog.findMany({ where: { userId: id } }).catch(e => { throw e }).finally(async () => await prisma.$disconnect())
    return categoryes
}

// ==== type
export const readType = async ({ id }) => {
    const types = await prisma.type.findMany({ where: { id: id } }).catch(e => { throw e }).finally(async () => await prisma.$disconnect())
    return types
}
export const readAllTypes = async () => {
    const types = await prisma.type.findMany().catch(e => { throw e }).finally(async () => await prisma.$disconnect())
    return types
}
// ==== cloth
export const readCloth = async ({ id }) => {
    const cloths = await prisma.cloth.findMany({ where: { id: id } }).catch(e => { throw e }).finally(async () => await prisma.$disconnect())
    return cloths
}

export const readAllCloths = async () => {
    const cloths = await prisma.cloth.findMany().catch(e => { throw e }).finally(async () => await prisma.$disconnect())
    return cloths
}
