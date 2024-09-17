import React from 'react'

export default function ItemLoader() {
    return (
        < div className='grid grid-cols-2 gap-4 animate-pulse' >
            <div className='p-4 border rounded flex flex-col items-start gap-2'>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/3"></div>
            </div>
        </div >
    )
}
