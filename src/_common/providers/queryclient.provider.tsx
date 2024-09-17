import { queryClient } from '@/lib/http/queryclient'
import React, { PropsWithChildren } from 'react'
import { QueryClientProvider } from 'react-query'

export default function QueryClientProviderWrapper({ children }: PropsWithChildren) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}
