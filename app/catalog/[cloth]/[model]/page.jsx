import { ModelHero } from './sections/modelHero'
import { readType } from '@/app/CRUD/read'

//generateMetadata
export async function generateMetadata({ params: { model } }) {
    const id = model.split('%20')[1]
    const [meta] = await readType({ id: +id })
    return {
        title: meta?.title,
        description: meta?.title
    }
}

//generateMetadata


export default function TypeCloth({ params }) {
    const id = params.model.split('%20')[1]
    return (
        <>
            <ModelHero cloth={params.cloth} model={params.model} id={+id} />
        </>
    )
}