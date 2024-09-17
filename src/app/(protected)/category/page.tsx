import React from 'react'
import CategoryForm from './components/form'
import CategoryList from './components/list'
import CategoryHeader from './components/header'

export default function CategoryPage() {
    return (
        <>
            <CategoryHeader />
            <div className='grid grid-cols-3 w-full gap-5'>
                <div className='col-span-1'>
                    <CategoryForm />
                </div>
                <div className='col-span-2 space-y-4'>
                    <div className='flex flex-row-reverse'>
                        <p>Total : 5</p>
                    </div>
                    <CategoryList />
                </div>
            </div>
        </>
    )
}