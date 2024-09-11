"use client"
import React, { PropsWithChildren } from 'react'
import { Toaster } from './toast.provider'

export default function ProviderWrapper({ children }: PropsWithChildren) {
    return (
        <>
            {children}
            <Toaster />
        </>
    )
}
