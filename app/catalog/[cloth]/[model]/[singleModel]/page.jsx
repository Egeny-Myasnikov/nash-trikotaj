import { SingleModelHero } from './sections/singleModelHero'
import { readCloth } from '@/app/CRUD/read'

//generateMetadata


export async function generateMetadata({ params: { singleModel } }) {
    const id = singleModel.split('%20')[1]
    const [meta] = await readCloth({ id: +id })
    return {
        title: meta?.title,
        description: meta?.title
    }
}

//generateMetadata

export default function TypeCloth({ params: { cloth, model, singleModel } }) {
    const id = singleModel.split('%20')[1]
    return (
        <>
            <SingleModelHero cloth={cloth} model={model} singleModel={singleModel} id={+id} />

        </>
    )
}