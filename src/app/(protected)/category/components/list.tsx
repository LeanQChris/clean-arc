"use client"
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import React from 'react'
import { categoryStore } from '../store'
import Item from './list.item'

export default function CategoryList() {
    const { categories, setSelectedId, selectedId  } = categoryStore()

    if (selectedId) {
        return <div className='space-y-5'>
            <ArrowLeftIcon height={20} width={20} onClick={() => setSelectedId(null)} />
            <div className='grid grid-cols-2 gap-4'>
                {
                    categories.filter((category) => category.parentId === selectedId).map((category, index) => {
                        return <div className='p-4 border rounded hover:scale-95 transition-all flex flex-col items-start gap-2'
                            onClick={() => {
                                if (category.hasChild) {
                                    setSelectedId(category.id)
                                }
                            }}
                            key={index}>
                            <Item category={category} />
                        </div>
                    })
                }
            </div>
        </div>
    }
    return (
        <div className='grid grid-cols-2 gap-4'>
            {
                categories.map((category, index) => {
                    if (category.hasChild && category.parentId === null) {
                        return <div className='p-4 border rounded hover:scale-95 transition-all flex flex-col items-start gap-2'
                            onClick={() => {
                                setSelectedId(category.id)
                            }}
                            key={index}>
                            <Item category={category} />
                        </div>
                    }
                })
            }
        </div>
    )
}

