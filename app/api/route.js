import { NextResponse } from "next/server"
import { catalog, newCatalog } from "./catalog"
import { strToPath } from "../helper"
export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('q')

    let currentCatalog = catalog
    if (query) {
        const cat = newCatalog()
        currentCatalog = cat.filter(cat => strToPath(cat.title) === query.toLocaleLowerCase())
    }

    return NextResponse.json(currentCatalog)
}