import { ClothHero } from './sections/clothHero'
import { readCategory } from '@/app/CRUD/read'

export async function generateMetadata({ params: { cloth } }) {
    const id = cloth.split('%20')[1]
    const [meta] = await readCategory({ id: +id })
    return {
        title: meta?.title,
        description: meta?.descriptionSEO
    }
}

export default function Cloth({ params }) {

    const id = params.cloth.split('%20')[1]

    return (
        <>
            <ClothHero cat={params.cloth} id={id} />
        </>
    )
}