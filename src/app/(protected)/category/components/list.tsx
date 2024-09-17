"use client"
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import React from 'react'
import { categoryStore } from '../store'
import Item from './list.item'
import { useQuery } from 'react-query'
import ItemLoader from './item.loader'
import { fakeCategories } from '../data/fake'

export default function CategoryList() {
    const { categories, setSelectedId, selectedId, setCataegories } = categoryStore()

    const { isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => fakeCategories,
        onSuccess: (data) => {
            setCataegories(data)
        }
    })

    if (isLoading) {
        return <ItemLoader />
    }

    if (selectedId) {
        const filteredCategories = categories.filter((category) => category.parentId === selectedId)
        return <div className='space-y-5'>
            <ArrowLeftIcon height={20} width={20} onClick={() => setSelectedId(null)} />
            <div className='grid grid-cols-2 gap-4'>
                {filteredCategories.map((category, index) => {
                    return <div className='p-4 border rounded hover:scale-95 transition-all flex flex-col items-start gap-2' key={index}>
                        <Item category={category} onSelect={() => {
                            if (category.hasChild) {
                                setSelectedId(category.id)
                            }
                        }} />
                    </div>
                })}
            </div>
        </div>
    }

    return (
        <div className='grid grid-cols-2 gap-4'>
            {categories.map((category, index) => {
                if (category.hasChild && category.parentId === null) {
                    return <div className='p-4 border rounded hover:scale-95 transition-all flex flex-col items-start gap-2' key={index}>
                        <Item category={category}
                            onSelect={() => setSelectedId(category.id)}
                        />
                    </div>
                }
            })}
        </div>
    )
}

