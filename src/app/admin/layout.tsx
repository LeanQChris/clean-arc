import AdminLayout from '@/components/layouts'
import React, { PropsWithChildren } from 'react'

export default function AdminRoolLayout({ children }: PropsWithChildren) {
    return (
        <AdminLayout>
            {children}
        </AdminLayout>
    )
}
