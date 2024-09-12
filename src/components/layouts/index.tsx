import React, { PropsWithChildren } from 'react'
import Sidebar from './sidebar'

export default function AdminLayout({ children }: PropsWithChildren) {
    return (
        <main className="flex">
            <Sidebar />
            <section className='p-5'>
                {children}
            </section >
        </main>
    )
}
