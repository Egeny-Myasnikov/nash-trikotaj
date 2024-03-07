import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"
const prisma = new PrismaClient()

async function getAdmin() {
    const admin = await prisma.admin.findMany()
    return admin
}
async function getCatalog() {
    const catalog = await prisma.catalog.findMany()
    return catalog
}

export async function GET(request) {
    const currentCatalog = await getAdmin()
        .catch(e => {
            throw e
        })
        .finally(async () => {
            await prisma.$disconnect()
        })


    return NextResponse.json(currentCatalog)
}