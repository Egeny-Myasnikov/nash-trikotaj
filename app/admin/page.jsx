
import { PrismaClient } from "@prisma/client"
import { FormAddCatalog } from "./components/formAddCatalog"

const prisma = new PrismaClient()


async function postModel(data) {
    'use server'
    const catalog = await prisma.model.create({
        data: data
    })
        .catch(e => {
            throw e
        })
        .finally(async () => {
            await prisma.$disconnect()
        })
    return catalog

}


async function getAdmin() {
    const admin = await prisma.admin.findMany()
        .catch(e => {
            throw e
        })
        .finally(async () => {
            await prisma.$disconnect()
        })
    return admin

}

async function getCatalog(id) {
    const catalog = await prisma.catalog.findMany({
        where: { authorId: id }
    })
        .catch(e => {
            throw e
        })
        .finally(async () => {
            await prisma.$disconnect()
        })
    return catalog

}
async function getCloth(id) {
    const cloth = await prisma.cloth.findMany({
        where: { catalogId: id }
    })
        .catch(e => {
            throw e
        })
        .finally(async () => {
            await prisma.$disconnect()
        })
    return cloth
}
async function getAllCloth() {
    const cloth = await prisma.cloth.findMany()
        .catch(e => {
            throw e
        })
        .finally(async () => {
            await prisma.$disconnect()
        })
    return cloth
}
async function getModel(id) {
    const model = await prisma.model.findMany({
        where: { clothId: id }
    })
        .catch(e => {
            throw e
        })
        .finally(async () => {
            await prisma.$disconnect()
        })
    return model
}
async function getAllModel() {
    const model = await prisma.model.findMany()
        .catch(e => {
            throw e
        })
        .finally(async () => {
            await prisma.$disconnect()
        })
    return model
}

export default async function Admin() {
    const admin = await getAdmin()
    const catalog = await getCatalog(admin[0].id)

    const cat = [...catalog, ...await getAllCloth(), ...await getAllModel()]
    return (
        <div>
            <h1>Привет {admin[0].name}!</h1>
            <br />
            <br />
            <br />
            <br />

            <FormAddCatalog addModel={postModel} catalog={cat} />

        </div>

    )
}
