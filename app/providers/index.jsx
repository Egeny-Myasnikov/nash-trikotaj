"use client"

import { createContext, useEffect, useState } from "react";
import { readAllCategoryes, readAllCloths, readAllTypes } from "../CRUD/read";

export const ListClothContext = createContext(null)

export default function ListClothProvider({ children }) {
    const [clothList, setClothList] = useState([])
    const [typeList, setTypeList] = useState([])
    const [categoryList, setCategoryList] = useState([])

    const getCloths = async () => {
        const cloth = await readAllCloths()
        setClothList(cloth)
    }


    const getTypes = async () => {
        const type = await readAllTypes()
        setTypeList(type)
    }

    const getCategoryes = async () => {
        const cat = await readAllCategoryes()
        setCategoryList(cat)

    }

    useEffect(() => {
        getCloths()
        getTypes()
        getCategoryes()
    }, [])

    return (
        <ListClothContext.Provider value={{
            clothsContext: { clothList, getCloths },
            typesContext: { typeList, getTypes },
            categoryesContext: { categoryList, getCategoryes }
        }}>
            {children}
        </ListClothContext.Provider>
    )
}