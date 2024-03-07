'use client'
import { useEffect, useState } from 'react'
import s from './style.module.css'


export const FormAddCatalog = ({ addModel, catalog }) => {
    const [titleValue, setTitleValue] = useState('')
    const [imgPath, setImgPath] = useState('')
    const [catValue, setCatValue] = useState('')

    const cat = catalog.filter((cat) => cat.authorId)
    const cloth = catalog.filter((cat) => cat.catalogId)
    const model = catalog.filter((cat) => cat.clothId)
    // const cloth = ''
    // const model = ''


    const addCatalog = (e) => {

        e.preventDefault()
        // Read the form data
        const form = e.target
        const formData = new FormData(form)
        const data = {
            title: formData.get('title'),
            catalog: formData.get('catalog'),
            cloth: formData.get('cloth'),
        }
        // console.log(cat);
        // console.log(cloth);
        // console.log(model);
        console.log(data);

        // addModel({
        //     title: titleValue,
        //     imgCover: imgPath,
        //     clothId: 1
        // })
        setTitleValue('')
    }

    return (
        <form onSubmit={addCatalog}>
            <input
                type="text"
                name="title"
                placeholder="название"
                onChange={(e) => setTitleValue(e.target.value)}
                value={titleValue}
            />

            <select name="catalog">
                {cat.map((cat) => (
                    <option
                        key={cat.id}
                        value={cat.id}
                    >{cat.title}
                    </option>
                ))}
            </select>
            <select name="cloth">
                {cloth.map((cat) => (
                    <option
                        key={cat.id}
                        value={cat.id}
                    >{cat.title}
                    </option>
                ))}
            </select>


            <button
                type='submit'
            >Добавить</button>
        </form>
    )
}
