import { InputHTMLAttributes, ChangeEventHandler, ReactNode } from "react";

export type OptionType = {
    value: string;
    label: string;
};

export interface FormField extends InputHTMLAttributes<HTMLInputElement> {
    name: string
    placeholder: string
    label?: string
    type?: FormFieldType
    options?: OptionType[]
    isChecked?: boolean
    onChange?: ChangeEventHandler<HTMLInputElement>
    child?: ReactNode
    visible?: (values: boolean) => boolean
    disabled?: boolean
    getValue?: (value: number | string | boolean) => void
    min?: number
    max?: number
    required?: boolean
    error?: string
}

export type FormFieldType =
    | "text"
    | "number"
    | "email"
    | "password"
    | "textarea"
    | "checkbox"
    | "checkboxList"
    | "radio"
    | "select"
    | "date"
    | "file"
    | "switch";
