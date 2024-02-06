'use client'
import { useState } from 'react'
import { Form } from '../UI/MyForm'
import { MyField } from '../UI/myField'
import s from './style.module.css'
import { useCatalogStore } from '@/app/store/catalogStore'
export const SearchComponent = () => {
    const [value, setValue] = useState('')
    const [result, setResult] = useState([])
    const getSearchData = useCatalogStore((state) => state.getSearchData())

    const resultHandler = (e) => {
        const res = getSearchData.filter(el => el.toLocaleLowerCase() === e.target.value.toLocaleLowerCase())
        setValue(e.target.value)
        setResult(res)
    }


    return (
        <div className={`${s.searchComponent}`}>
            <Form onSubmit={() => alert(value)}>
                <MyField
                    type='search'
                    onChange={(e) => resultHandler(e)}
                    value={value}
                    placeholder='Найти - например: футболки'
                />
            </Form>

            {
                value.length !== 0 ?
                    (
                        <ul className={`${s.result}`}>
                            {
                                result.length !== 0 ?
                                    result.map((el, idx) => {
                                        return <li key={idx}>{el}</li>
                                    }) : <li>Такой одежды нет</li>
                            }
                        </ul>
                    ) : null
            }

        </div>
    )
}