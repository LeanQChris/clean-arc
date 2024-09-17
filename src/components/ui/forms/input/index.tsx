import React from 'react'
import { Label } from '../../label'
import { Input } from './base'
import { FormField } from '../interface'
import ErrorMessage from '../error'

export default function FormInput(props: FormField) {
    return (
        <div className='space-y-2  flex- flex-col gap-1'>
            {props.label && <Label>{props.label}</Label>}
            <Input {...props} />
            {props.error && <ErrorMessage error={props.error} />}
        </div>
    )
}
