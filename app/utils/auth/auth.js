import argon2 from "argon2"
import prisma from "../prisma"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"

async function getAdmin() {
    return await prisma.user.findMany({ where: { admin: true } })
        .catch(e => { throw e })
        .finally(async () => await prisma.$disconnect())
}
export const getAdminId = async () => {
    const [admin] = await getAdmin()
    return admin.id
}


export const auth = async () => {
    const [admin] = await getAdmin()
    const passwordFromCookies = cookies()?.get('admin')?.value
    passwordFromCookies ?? redirect('/admin/login')
    const isPasswordCorrect = passwordFromCookies && await argon2.verify(passwordFromCookies, admin.password)
    !isPasswordCorrect && redirect('/admin/login')
    try {
        return { id: admin.id, name: admin.name, admin: admin.admin }

    } catch (error) {
        console.log(error);
    }
}