"use client"
import React, { PropsWithChildren } from 'react'
import { Toaster } from './toast.provider'
import QueryClientProviderWrapper from './queryclient.provider'
import { ThemeProvider } from './theme.provider'

export default function ProviderWrapper({ children }: PropsWithChildren) {
    return (
        <>
            <QueryClientProviderWrapper>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </QueryClientProviderWrapper>
            <Toaster />
        </>
    )
}
