'use server'
const { cookies } = require("next/headers")

export async function logoutAction() {
    cookies().delete('admin')
    console.log('logout')
}