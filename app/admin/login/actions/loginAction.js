'use server'

import prisma from "@/app/utils/prisma"
import argon2 from "argon2"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function loginAction(formData) {

    const { name, password } = Object.fromEntries(formData)
    if (!name) return { message: 'Ошибка! Введите имя!', status: 'error' }
    if (!password) return { message: 'Ошибка! Введите пароль!', status: 'error' }
    const [admin] = await prisma.user.findMany({ where: { admin: true } }).catch(e => { throw e })
        .finally(async () => await prisma.$disconnect())
    if (admin.name !== name) return { message: 'Ошибка! Не верное имя!', status: 'error' }
    if (admin.password !== password) return { message: 'Ошибка! Не верный пароль!', status: 'error' }
    const passwordHash = await argon2.hash(password)
    cookies().set('admin', passwordHash)
    console.log('login ok');
    redirect('/admin')

}