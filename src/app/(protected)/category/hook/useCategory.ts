import { useFormik } from "formik"
import { useEffect } from "react"
import { categoryStore } from "../store"
import { ICategoryDTO } from "../data/interface"

export default function useCategory() {
    const { toEditData } = categoryStore()
    const formik = useFormik({
        initialValues: {} as ICategoryDTO,
        onSubmit: () => { }
    })

    useEffect(() => {
        if (toEditData) {
            formik.setValues(toEditData)
        }
    }, [toEditData])

    return { formik }
}