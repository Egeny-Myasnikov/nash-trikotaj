import { AdminHero } from "./sections/adminHero"
import { AddClothsSection } from "./sections/addCloths"
import { addClothAction } from "./actions/addClothAction"
import { addCategoryAction } from "./actions/addCategoryAction"
import { addTypeAction } from "./actions/addTypeAction"
import { ClothsSection } from "./sections/cloths"
import ListClothProvider from "../providers"



export default async function Admin() {
    return (
        <>
            <AdminHero />
            <ClothsSection />
            <AddClothsSection actions={{ addCategoryAction, addClothAction, addTypeAction }} />
        </>

    )
}
