'use client'
import { deleteCategory, deleteCloth, deleteType } from "@/app/CRUD/delete";

export function deleteCategoryAction({ id }) {
    deleteCategory({ id })
}
export function deleteTypeAction({ id }) {
    deleteType({ id })
}
export function deleteClothAction({ id }) {
    deleteCloth({ id })
}