import Link from 'next/link'
import s from './style.module.css'
import { CatalogSection } from './sections/catalogSection'
export default function Catalog() {

    return (
        <div className={`${s.cat}`}>

        <CatalogSection/>

            </div>
    )
}