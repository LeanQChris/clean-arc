import { create } from "zustand";
import { ICategoryDTO } from "./data/interface";
import { categories } from "./data/fake";

type ICategoryStore = {
    categories: ICategoryDTO[],
    setCataegories: (categories: ICategoryDTO[]) => void,
    selectedId: string | null,
    setSelectedId: (id: string | null) => void,
    removeCategory: (id: string) => void,
    toEditData: ICategoryDTO | null,
    setToEditData: (toEditData: null | ICategoryDTO) => void
}

export const categoryStore = create<ICategoryStore>((set) => ({
    categories: categories,
    setCataegories: (categories: ICategoryDTO[]) => set({ categories }),
    addCategory: (category: ICategoryDTO) => {
        set((state) => ({ categories: [...state.categories, category] }))
    },
    removeCategory: (id: string) => {
        set((state) => ({ categories: state.categories.filter((category) => category.id !== id) }))
    },
    updateCategory: (category: ICategoryDTO) => {
        set((state) => ({ categories: state.categories.map((c) => c.id === category.id ? category : c) }))
    },
    selectedId: null,
    setSelectedId: (id: string | null) => set({ selectedId: id }),
    toEditData: null,
    setToEditData: (toEditData: null | ICategoryDTO) => set({ toEditData })
}))